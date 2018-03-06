// @flow
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

const Header = ({
  filter,
  spread
}: {
  filter: string => void,
  spread: void => void
}) => {
  const changed = e => {
    spread()
    filter(e.target.value)
  }

  return (
    <BlueNav className="nav has-shadow">
      <div className="container">
        <div className="nav-center">
          <a className="nav-item">
            <div className="field">
              <p className="control has-icons-left ">
                <WideInput
                  autoFocus
                  className="input is-small"
                  type="text"
                  placeholder="Search"
                  onChange={changed}
                />
                <span className="icon is-small is-left">
                  <i className="fa icon-search" />
                </span>
              </p>
            </div>
          </a>
        </div>
        {/*<div className="nav-center">
          <a className="nav-item">
            <a className="button is-small is-info">
              <span className="icon">
                <i className="fa fa-gear" />
              </span>
            </a>
          </a>
        </div>*/}
      </div>
    </BlueNav>
  )
}
export default Header
