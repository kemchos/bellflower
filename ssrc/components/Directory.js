// @flow
import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import Item from './Item'

import Node from '../models/Node'

const Box = styled.div`
	padding: 10px 10px 10px 2px;
  border-left: #e5e5ea solid 1px;
  border-bottom: #e5e5ea solid 1px;
  background: white;
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-duration: 0.4s;
  &:hover {
    background: whitesmoke;
  }
`
const Trapezoid = styled.div`
  border-top: 10px solid #f7f8fb;
  border-left: 10px solid transparent;
  height: 0;
`
const Accordion = styled.div`
  overflow: hidden;
  margin-left: 10px;
`
const Icon = styled.span`
  margin-right: 4px;
`

const Directory = observer(({ node, match }: { node: Node, match: string }) => {
  const toggle = () => node.toggle()

  const mather = (str: string) => match === '' || str.toLowerCase().indexOf(match) !== -1

  const children = node.children.map((node: Node) => {
    return node.directory
      ? <Directory key={node.id} node={node} match={match} />
      : mather(node.scannable) && <Item key={node.id} node={node} />
  })

  return (
    <div>
      <Box onClick={toggle}>
        <Icon className="icon is-small">
          {node.opend ? <i className="fa icon-minus-squared" /> : <i className="fa icon-plus-squared" />}
        </Icon>
        <strong>{node.title}</strong>
      </Box>
      {node.opend && <Trapezoid />}
      {node.opend &&
        <Accordion>
          {children}
        </Accordion>}
    </div>
  )
})
export default Directory
