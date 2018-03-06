// @flow
import React from 'react'

import { observer } from 'mobx-react'

import Header from './components/Header'
import ListView from './components/ListView'

import { Bookmarks } from './stores/BookmarkStore'
import { Views } from './stores/ViewStore'

@observer
export default class Popup extends React.Component {
  props: {
    bookmarkStore: ?Bookmarks,
    viewStore: ?Views
  }

  render() {
    return (
      <div>
        <Header
          filter={
            this.props.viewStore
              ? (str: string) => this.props.viewStore.filter(str)
              : (_: string) => {}
          }
        />
        <ListView
          nodes={
            this.props.bookmarkStore ? this.props.bookmarkStore.bookmarks : []
          }
          match={this.props.viewStore ? this.props.viewStore.match : ''}
        />
      </div>
    )
  }
}
