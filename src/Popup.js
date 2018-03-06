import React from 'react'
import styled from 'styled-components'

import { observer } from 'mobx-react'

import Header from './components/Header'
import GroupTree from './components/GroupTree'

@observer
export default class Popup extends React.Component {
  render() {
    return (
      <div>
        <Header
          filter={this.props.store.view ? str => this.props.store.view.filter(str) : str => {}}
          spread={this.props.store.group ? () => this.props.store.group.spread() : () => {}}
          download={this.props.store.group ? () => this.props.store.group.download() : () => {}}
        />

        <GroupTree store={this.props.store} />
      </div>
    )
  }
}
