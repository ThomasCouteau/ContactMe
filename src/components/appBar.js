import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
}))

export default function MeAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{backgroundColor: '#0F9AD4'}}>
        <Toolbar>
          <Typography variant='h6' fontWeight='fontWeightLight' fontFamily='fontFamily' color='#FFFFFF'>
            Thomas Couteau
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
