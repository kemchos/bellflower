import { observable, action } from 'mobx'

import Group from '../models/Group'
import Page from '../models/Page'

import { uid } from '../utils/id'
import { load, save } from '../utils/storage'

export class Groups {
  @observable groups

  constructor() {
    this.groups = []
  }

  @action
  load() {
    load(groups => {
      this.groups = groups
      console.log('Loaded.')
    })
  }
  save() {
    save(this.groups, () => {
      console.log('Saved.')
    })
  }
  download() {
    chrome.downloads.download(
      {
        url: 'data:application/octet-stream,' + encodeURIComponent(JSON.stringify(this.groups)),
        filename: 'backup.json'
      },
      e => console.log('Downloaded.')
    )
    // var href = 'data:application/octet-stream,' + encodeURIComponent(JSON.stringify(this.groups))
    // location.href = href
  }

  spread() {
    this.groups.forEach(group => (group.opened = true))
  }

  remove(group) {
    this.groups.remove(group)
    this.save()
  }

  add(name) {
    this.groups.push(new Group(uid(), name, []))
    this.save()
  }

  edit(group, name) {
    group.name = name
    this.save()
  }

  addTabs(group) {
    chrome.tabs.query({ currentWindow: true, highlighted: true }, tabs => {
      tabs.map(tab => group.pages.push(new Page(uid(), tab.url, tab.title)))
      chrome.tabs.remove(tabs.map(tab => tab.id))
      this.save()
    })
  }

  removeTab(group, page) {
    group.pages.remove(page)
    this.save()
  }

  terminate() {}
}
export default new Groups()

// const groups = [
//   {
//     id: 'dfaegg4q45',
//     name: 'AI',
//     pages: [
//       {
//         url: 'http://hogehoge/',
//         title: 'HogeHoge'
//       }
//     ]
//   }
// ]
