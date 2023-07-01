;(function () {
  let timer = null
  let playing = false
  let $active = null

  const $aside = document.querySelector('#aside')
  const $main = document.querySelector('#main')
  const $arrows = document.querySelector('#arrows')
  const minTop = 0
  const maxTop = $main.scrollHeight

  const updateButtons = (scrollTop) => {
    const $up = $arrows.querySelector('.arrows__up')
    const $down = $arrows.querySelector('.arrows__down')

    if (scrollTop <= minTop) {
      $up.classList.add('hide')
    } else if (scrollTop >= maxTop) {
      $down.classList.add('hide')
    } else if (scrollTop > minTop && scrollTop < maxTop) {
      $up.classList.remove('hide')
      $down.classList.remove('hide')
    }
  }

  const scrollTo = (top, speed = 100) => {
    let scrollTop = $main.scrollTop
    const distance = top - scrollTop
    const step = Math.ceil(distance / 15)
    const scroll = () => {
      if (timer) {
        clearTimeout(timer)
      }

      scrollTop += step

      if (
        (scrollTop <= top && distance < 0) ||
        (scrollTop >= top && distance > 0)
      ) {
        scrollTop = top
        playing = false
      }

      $main.scrollTop = scrollTop
      updateButtons(scrollTop)

      if (!playing) {
        clearTimeout(timer)
        timer = null
        return false
      } else {
        timer = setTimeout(scroll, speed)
      }
    }

    if (playing) {
      clearTimeout(timer)
      timer = null
      playing = false

      return false
    }

    playing = true

    scroll()
  }

  const scrollToAnchor = function (evt) {
    const $target = evt.delegateTarget
    const id = $target.href.split('#')[1]
    const $method = document.querySelector(`#${id}`)

    scrollTo($method.offsetTop, 50)

    evt.stopPropagation()
    evt.preventDefault()
  }

  const scrollToTop = function () {
    scrollTo(minTop)
  }

  const scrollToBottom = function () {
    scrollTo(maxTop)
  }

  const syncNav = () => {
    const Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            const id = entry.target.getAttribute('id')
            const $anchor = document.querySelector(
              `.aside__anchor[href="#${id}"]`
            )
            const $item = $anchor.parentNode

            if ($active) {
              $active.classList.remove('active')
            }
            $item.classList.add('active')
            $active = $item
          }
        })
      },
      {
        root: $main
      }
    )

    $main.querySelectorAll('.section__h3').forEach((section) => {
      Observer.observe(section)
    })
  }

  const setup = () => {
    // eslint-disable-next-line no-undef
    const $asideEmitter = delegate($aside)
    // eslint-disable-next-line no-undef
    const $arrowsEmitter = delegate($arrows)

    updateButtons($main.scrollTop)
    syncNav()

    $asideEmitter.click('.aside__anchor', scrollToAnchor)

    $arrowsEmitter.click('.arrows__up', scrollToTop)
    $arrowsEmitter.click('.arrows__down', scrollToBottom)
  }

  setup()
})()
