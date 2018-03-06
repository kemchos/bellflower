import { observable, action } from 'mobx'

export default class Page {
  id
  @observable url
  @observable title

  constructor(id, url, title) {
    this.id = id
    this.url = url
    this.title = title
  }
}
