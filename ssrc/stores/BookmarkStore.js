// @flow
import { observable, action } from 'mobx'

import Node from '../models/Node'

export class Bookmarks {
  @observable bookmarks: Array<Node>

  constructor() {
    this.bookmarks = []
  }

  @action load(): void {
    const toNode = (native: chrome$BookmarkTreeNode, depth: number): Node => {
      const node = new Node(native, depth)
      if (native.children !== undefined) {
        node.children = native.children.map((node: chrome$BookmarkTreeNode) =>
          toNode(node, depth + 1)
        )
      }
      return node
    }

    chrome.bookmarks.getTree((roots: Array<chrome$BookmarkTreeNode>) => {
      this.bookmarks = roots.map((node: chrome$BookmarkTreeNode) =>
        toNode(node, 0)
      )
    })
  }

  @action spread(): void {
    const open = (node: Node): void => {
      if (node.directory) {
        node.open()
        node.children.forEach((child: Node) => open(child))
      }
    }
    this.bookmarks.forEach((child: Node) => open(child))
  }

  terminate(): void {}
}
export default new Bookmarks()
