import Outline from '@yaohaixiao/outline.js/outline'

const defaults = Outline.DEFAULTS
let outline

defaults.selector = 'h2,h3'
defaults.title = false
defaults.showCode = false
defaults.position = 'sticky'
defaults.parentElement = '#aside'
defaults.scrollElement = '#main'
defaults.articleElement = '#article'
defaults.git = 'https://github.com/yaohaixiao/types.js'
defaults.tags = 'https://github.com/yaohaixiao/types.js/tags'
defaults.issues = 'https://github.com/yaohaixiao/types.js/issues'
defaults.print = {
  element: '#article',
  title: 'Types.js'
}
defaults.chapterTextFilter = (text) => {
  return text.replace(/\(.*?\)/, '()')
}

outline = new Outline(Outline.DEFAULTS)

export default outline
