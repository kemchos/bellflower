// @flow
import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import Node from '../models/Node'

const Box = styled.div`
  border-left: #e5e5ea solid 1px;
  border-bottom: #e5e5ea solid 1px;
  background: white;
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-duration: 0.3s;
  &:hover {
    margin-left: 4px;

    a > div > span {
      opacity: 1;
    }
  }
`
const Link = styled.a`
  display: block;
  overflow: hidden;
`
const Inner = styled.div`
  display: flex;
  margin: 10px;
`
const Space = styled.figure`
  margin-left: 3px;
  margin-right: 10px;

  img {
    border-radius: 36%;
  }
`
const Title = styled.span`
  color: black;
  white-space: nowrap;
  margin-right: 6px;
`
const Tag = styled.span`
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-duration: 0.3s;
  opacity: 0;
  margin-left: 6px;
  color: #b4b5c3;
  font-size: 1.0em;
  text-decoration: underline;
`
const Url = styled.span`
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-duration: 0.3s;
  opacity: 0;
  margin-left: 6px;
  color: #b4b5c3;
  font-size: 1.0em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`

const Item = observer(({ node }: { node: Node }) => {
  return (
    <Box>
      <Link href={node.url} rel="noopener noreferrer" target="_blank">
        <Inner>
          <Space className="image is-16x16">
            <img src={`chrome://favicon/${node.url}`} />
          </Space>
          <Title>{node.title}</Title>
          {node.tags.map(tag => <Tag>{tag}</Tag>)}
          <Url>{node.url}</Url>
        </Inner>
      </Link>
    </Box>
  )
})
export default Item
