import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import CallIcon from '@material-ui/icons/Call'
import MailIcon from '@material-ui/icons/Mail'
import ForumIcon from '@material-ui/icons/Forum'

export default function ContactList() {
  return (
    <List component='nav'>
      <ListItem>
        <ListItemIcon>
          <ForumIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Chat' />
      </ListItem>
      <Divider />
      <ListItem button component='a' href='tel:+3300000000'>
        <ListItemIcon>
          <CallIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='00 00 00 00 00' />
      </ListItem>
      <ListItem button component='a' href='mailto:thomas@couteau.it'>
        <ListItemIcon>
          <MailIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='thomas@couteau.it' />
      </ListItem>
    </List>
  )
}
