import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

const Header = styled.header`
  background: rgba(35, 102, 209, 0.9);
  border-radius: 4px 4px 0 0;
`
const Title = styled.header`
  color: white;
  font-size: 12px;
  margin: 4px 8px;
`
const Body = styled.section`
  background: white;
  padding: 4px 8px;
`
const Footer = styled.footer`
  background: white;
  border-radius: 0 0 4px 4px;
  padding: 8px 0;
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  margin: 0 4px;
`

@observer
export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  add() {
    this.props.store.group.add(this.state.name)
    this.clear()
  }
  clear() {
    this.props.store.view.closeModal()
    this.setState({ name: '' })
  }

  render() {
    const opend = this.props.store.view.modalOpen

    return (
      <div class={`modal ${opend ? 'is-active' : ''}`}>
        <div class="modal-background" />
        <div class="modal-card">
          <Header>
            <Title>Add New Group</Title>
          </Header>
          <Body>
            <input
              autoFocus
              className="input is-small"
              type="text"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </Body>
          <Footer>
            <Button className="button is-small is-success" onClick={() => this.add()}>
              Create
            </Button>
            <Button className="button is-small" onClick={() => this.clear()}>
              Cancel
            </Button>
          </Footer>
        </div>
      </div>
    )
  }
}
