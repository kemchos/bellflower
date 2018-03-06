// @flow
import { observable, action } from 'mobx'

export class Views {
  @observable match: string

  constructor() {
    this.match = ''
  }

  @action filter(match: string): void {
    this.match = match.toLowerCase()
  }

  terminate(): void {}
}
export default new Views()
