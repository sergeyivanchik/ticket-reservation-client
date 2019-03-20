import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import './TopNavbar.scss'

function TopNavBar() {
  return (
    <div className="top-navbar">
      <AppBar  position="static">
        <Toolbar>
          <IconButton className="menu" color="inherit" aria-label="Menu">
            <Link to="/admin-page"><MenuIcon /></Link>
          </IconButton>
          <Typography variant="h6" color="inherit" className="typography">
            <Link to ="/"> Cinema </Link>
          </Typography>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>  
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopNavBar