import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
    background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
  },
}))

export default function AppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' fontWeight='fontWeightLight' fontFamily='fontFamily' color='secondary'>
            Thomas Couteau
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
