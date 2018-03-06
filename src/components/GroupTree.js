import React from 'react'
import styled from 'styled-components'

import { observer } from 'mobx-react'

import Group, { Box } from './Group'

const Background = styled.div`
  background: #e5e5ea;
  margin-top: 52px;
  min-height: 500px;
`
const AddButton = styled.span`
  text-align: center;
  width: 100% !important;
  margin: 6px 0 3px 0;
`

const GroupTree = observer(({ store: { group, view } }) => {
  return (
    <Background className="content is-small">
      {group.groups.map(g => (
        <Group
          key={g.id}
          group={g}
          edit={name => group.edit(g, name)}
          remove={() => group.remove(g)}
          add={() => group.addTabs(g)}
          removePage={page => group.removeTab(g, page)}
          query={view.query}
        />
      ))}
      <Box
        onClick={() => {
          const name = prompt('New group name')
          if (name) group.add(name)
        }}>
        <AddButton className="icon is-small">
          <i className="fa icon-plus-squared" />
        </AddButton>
      </Box>
    </Background>
  )
})
export default GroupTree
