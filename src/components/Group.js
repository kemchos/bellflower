import React from 'react'
import styled from 'styled-components'

import { observer } from 'mobx-react'

import Page from './Page'

export const Box = styled.div`
  display: flex;
  padding: 0;
  border-left: #e5e5ea solid 1px;
  border-bottom: #e5e5ea solid 1px;
  background: white;
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-duration: 0.4s;
  &:hover {
    background: whitesmoke;

    div > a {
      opacity: 1;
    }
  }
`
const Contents = styled.div`
  flex: 1;
  padding: 10px 10px 10px 2px;
  display: flex;
  width: 340px;
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
  margin-right: 8px;
`
const Text = styled.strong`
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const Button = styled.a`
  padding: 18px 15px;
  transition: all 0.4s ease;
`
const EditButton = styled.a`
  color: #d4d4d4;
  transition: all 0.4s ease;
  opacity: 0;
  margin-left: 6px;
`

const Group = observer(({ group, edit, remove, add, removePage, query }) => (
  <div>
    <Box>
      <Contents onClick={() => group.toggle()}>
        <Icon className="icon is-small">
          {group.opened ? <i className="fa icon-angle-down" /> : <i className="fa icon-angle-right" />}
        </Icon>
        <Text>{group.name}</Text>
        <EditButton
          className="icon is-small"
          title="add selected tabs"
          onClick={e => {
            const newName = prompt('Update this group name', group.name)
            if (newName) edit(newName)
            e.stopPropagation()
          }}>
          <i className="fa icon-pencil" />
        </EditButton>
      </Contents>
      <Button className="icon is-small" title="add selected tabs" onClick={() => add()}>
        <i className="fa icon-plus" />
      </Button>
      <Button className="icon is-small" title="open on this windows" onClick={() => group.open()}>
        <i className="fa icon-window-maximize" />
      </Button>
      <Button className="icon is-small" title="open on new windows" onClick={() => group.openWithNewWindow()}>
        <i className="fa icon-window-restore" />
      </Button>
      <Button className="icon is-small" title="remove" onClick={() => remove()}>
        <i className="fa icon-cancel" />
      </Button>
    </Box>
    {group.opened && <Trapezoid />}
    {group.opened && (
      <Accordion>
        {group.pages
          .filter(
            page =>
              query === null ||
              query === undefined ||
              query === '' ||
              `${page.url}-${page.title}`.toLowerCase().indexOf(query) !== -1
          )
          .map(page => <Page key={page.id} page={page} remove={() => removePage(page)} />)}
      </Accordion>
    )}
  </div>
))
export default Group
