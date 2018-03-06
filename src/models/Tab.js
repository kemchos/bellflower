import { observable, action } from 'mobx'

export default class Tab {
  id
  @observable url
  @observable title

  @observable selected

  constructor(tab) {
    this.id = tab.id
    this.url = tab.url
    this.title = tab.title

    this.selected = false
  }

  @action
  toggle() {
    this.selected = !this.selected
  }
}
