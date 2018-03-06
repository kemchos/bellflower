// @flow
import React from 'react'
import styled from 'styled-components'

import Node from '../models/Node'

import Directory from './Directory'

const Background = styled.div`
  background: #e5e5ea;
  margin-top: 52px;
`

const ListView = ({ nodes, match }: { nodes: Array<Node>, match: string }) => {
  if (nodes.length === 0) return null

  const roots = nodes[0].children.map((node: Node) => (
    <Directory key={node.id} node={node} match={match} />
  ))

  return (
    <Background className="content is-small">
      {roots}
    </Background>
  )
}
export default ListView
