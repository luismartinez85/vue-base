const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><div id="app"></div><body></body></html>')

const { window } = jsdom

global.window = window
global.Event = window.Event
global.document = window.document

global.Element = window.HTMLElement
global.XMLHttpRequest = window.XMLHttpRequest
global.Node = window.Node
global.navigator = {
  userAgent: 'node.js'
}
