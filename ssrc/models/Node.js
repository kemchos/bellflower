// @flow
import { observable, action } from 'mobx'

export default class Node {
  id: string
  @observable parent: ?string
  @observable index: ?number
  @observable url: ?string
  @observable scannable: string
  @observable title: string
  @observable tags: Array<string>
  @observable created: ?number
  @observable children: Array<Node>

  @observable directory: boolean
  @observable depth: number

  @observable selected: boolean
  @observable opend: boolean

  constructor(node: chrome$BookmarkTreeNode, depth: number) {
    this.id = node.id
    this.parent = node.parentId
    this.index = node.index
    this.url = node.url
    this.scannable = node.title
    let words = node.title.split(' #').map(a => a.trim())
    this.title = words.shift()
    this.tags = words
    this.created = node.dateAdded
    this.children = []

    this.directory = node.children !== undefined
    this.depth = depth

    this.selected = false
    this.opend = depth < 2
  }

  @action
  open() {
    this.opend = true
  }

  @action
  toggle() {
    this.opend = !this.opend
  }

  setTitle(title: string) {
    this.title = title
  }
}
