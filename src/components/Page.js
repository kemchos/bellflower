import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

const Box = styled.div`
  border-left: #e5e5ea solid 1px;
  border-bottom: #e5e5ea solid 1px;
  background: white;
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-duration: 0.3s;
  &:hover {
    margin-left: 4px;

    div > a > span {
      opacity: 1;
    }
  }
`
const Inner = styled.div`
  display: flex;
`
const Link = styled.a`
  padding: 10px;
  display: flex;
  overflow: hidden;
  flex: 1;
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
const Url = styled.span`
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-duration: 0.3s;
  opacity: 0;
  margin-left: 6px;
  color: #b4b5c3;
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`
const Button = styled.a`
  padding: 18px 15px;
  color: black;
`

const Page = observer(({ page, remove }) => {
  return (
    <Box>
      <Inner>
        <Link href={page.url} rel="noopener noreferrer" target="_blank">
          <Space className="image is-16x16">
            <img src={`chrome://favicon/${page.url}`} />
          </Space>
          <Title>{page.title}</Title>
          <Url>{page.url}</Url>
        </Link>
        <Button className="icon is-small" title="add selected tabs" onClick={() => remove()}>
          <i className="fa icon-cancel" />
        </Button>
      </Inner>
    </Box>
  )
})
export default Page
