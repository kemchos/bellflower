import Group from '../models/Group'
import Page from '../models/Page'

const get = callback => {
  chrome.storage.sync.get(null, obj => {
    const groups = Object.values(obj).sort((a, b) => a.id - b.id)
    callback(groups)
  })
}

const set = (groups, callback) => {
  const obj = groups.reduce((map, obj) => {
    map[obj.id] = obj
    return map
  }, {})
  try {
    chrome.storage.sync.clear()
    chrome.storage.sync.set(obj, callback)
  } catch (e) {
    alert('cannot save !')
    console.error(groups)
  }
}

const convertObjectToModels = groups => {
  return groups.map(
    group => new Group(group.id, group.name, group.pages.map(page => new Page(page.id, page.url, page.title)))
  )
}

const convertModelsToObject = groups => {
  return groups.map(group => ({
    id: group.id,
    name: group.name,
    pages: group.pages.map(page => ({ id: page.id, url: page.url, title: page.title }))
  }))
}

export const load = callback => {
  get(groups => {
    callback(convertObjectToModels(groups))
  })
}

export const save = (groups, callback) => {
  set(convertModelsToObject(groups), () => {
    if (chrome.runtime.error) {
      console.log('Runtime error.')
    }

    console.log(convertModelsToObject(groups))

    callback()
  })
}
