import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './TopNavbar.scss';


function TopNavBar() {
  return (
    <div className="top-navbar">
      <AppBar  position="static">
        <Toolbar>
          <IconButton className="top-navbar__menu" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className="top-navbar__typography">
            <Link to="/" className='top-navbar__link-to'>Cinema</Link>
          </Typography>
          <Link to="/login" className='top-navbar__link-to'>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopNavBar;
