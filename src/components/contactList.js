import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactList() {
  return (
    <List component='nav'>
      <ListItem button component='a' href='tel:+33603773108'>
        <ListItemIcon>
          <PhoneIphoneIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='+33 6 03 77 31 08' />
      </ListItem>
      <Divider />
      <ListItem button component='a' href='mailto:thomas@couteau.it'>
        <ListItemIcon>
          <MailIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='thomas@couteau.it' />
      </ListItem>
      <ListItem button component='a' href='https://www.linkedin.com/in/thomas-couteau-a5057820a/'>
        <ListItemIcon>
          <LinkedInIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='LinkedIn' />
      </ListItem>
    </List>
  )
}
