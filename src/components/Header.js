import React from 'react'
import styled from 'styled-components'

const BlueNav = styled.header`
  background: rgba(35, 102, 209, 0.9);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`

const WideInput = styled.input`
  width: 280px;
`
const HiddenMenu = styled.div`
  position: absolute;
  right: 10px;
  bottom: 12px;
`
const Button = styled.a`
  padding: 18px 15px;
  color: #1758bf;
  border-radius: 4px;
  padding: 12px;
  transition: all 0.6s ease;
  &:hover {
    color: #e2edff;
    background: #6c9be8;
  }
`

const Header = ({ filter, spread, download }) => {
  const changed = e => {
    spread()
    filter(e.target.value)
  }

  const showModal = () => {}

  return (
    <BlueNav className="nav has-shadow">
      <div className="container">
        <div className="nav-center">
          <a className="nav-item">
            <div className="field">
              <p className="control has-icons-left ">
                <WideInput autoFocus className="input is-small" type="text" placeholder="Search" onChange={changed} />
                <span className="icon is-small is-left">
                  <i className="fa icon-search" />
                </span>
              </p>
            </div>
          </a>
        </div>
        <HiddenMenu>
          <Button className="icon is-small" title="download data" onClick={() => download()}>
            <i className="fa icon-download" />
          </Button>
        </HiddenMenu>
      </div>
    </BlueNav>
  )
}
export default Header
