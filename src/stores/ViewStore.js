import { observable, action } from 'mobx'

export class Views {
  @observable query
  @observable modalOpen

  constructor() {
    this.query = ''
  }

  filter(query) {
    this.query = query.toLowerCase()
  }

  terminate() {}
}
export default new Views()
