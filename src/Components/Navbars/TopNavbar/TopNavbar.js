import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { history } from '../../../App.js';
import './TopNavbar.scss';


class TopNavBar extends React.Component {
  redirect = url => history.push(url)

  render() {
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

            {localStorage.getItem('token') !== null
              ? <Button color="inherit" onClick={() => this.redirect('/profile')}>Profile</Button>
              : <Button color="inherit" onClick={() => this.redirect('/login')}>Login</Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default TopNavBar;
