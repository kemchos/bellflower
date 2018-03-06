import { observable, action } from 'mobx'

export default class Group {
  id
  @observable name
  @observable pages

  @observable opened

  constructor(id, name, pages) {
    this.id = id
    this.name = name
    this.pages = pages

    this.opened = false
  }

  @action
  toggle() {
    this.opened = !this.opened
  }

  open() {
    this.pages.forEach(page => chrome.tabs.create({ url: page.url }))
  }

  openWithNewWindow() {
    chrome.windows.create({ url: this.pages.map(page => page.url) })
  }
}
