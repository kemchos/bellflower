// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import BookmarkStore from './stores/BookmarkStore'
import ViewStore from './stores/ViewStore'

import Popup from './Popup'

class App extends React.Component {
  componentWillMount() {
    setTimeout(() => BookmarkStore.load(), 0)
  }
  componentWillUnmount() {
    BookmarkStore.terminate()
    ViewStore.terminate()
  }

  render() {
    return <Popup bookmarkStore={BookmarkStore} viewStore={ViewStore} />
  }
}

// Render
ReactDOM.render(<App />, document.getElementById('app'))
