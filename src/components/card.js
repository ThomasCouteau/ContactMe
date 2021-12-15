import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Moi from '../images/moi.jpg'
import ContactList from './contactList'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {},
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}))

export default function MeCard() {
  const classes = useStyles()

  return (
    <Container maxWidth='sm'>
      <Card className={classes.root}>
        <CardHeader avatar={<Avatar alt='Moi' src={Moi} className={classes.large} />}
          title='Contactez moi'
          titleTypographyProps={{ variant: 'h6' }}
        />
        <ContactList />
      </Card>
    </Container>
  )
}
