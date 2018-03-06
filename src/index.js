import React from 'react'
import ReactDOM from 'react-dom'

import GroupStore from './stores/GroupStore'
import ViewStore from './stores/ViewStore'

import Popup from './Popup'

class App extends React.Component {
  componentWillMount() {
    GroupStore.load()
  }
  componentWillUnmount() {
    GroupStore.terminate()
    ViewStore.terminate()
  }

  render() {
    return <Popup store={{ group: GroupStore, view: ViewStore }} />
  }
}

// Render
ReactDOM.render(<App />, document.getElementById('app'))
