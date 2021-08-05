import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  function NavBar({currentUser}) {
    const classes = useStyles();
  
    function handleLoginClick(){
        console.log("I was clicked")
    }
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <NavLink to="/">
            <Typography variant="h6" className={classes.title}>
              Nail Code
            </Typography>
            </NavLink>
            <br></br>
              {currentUser ? <h2>Welcome Back {currentUser.first_name}</h2> : null }
            <NavLink to="/signup">
            <Button color="inherit"> Sign Up</Button>
            </NavLink>
            <NavLink to="/login">
            <Button color="inherit">Login</Button>
            </NavLink>
          </Toolbar>
        </AppBar>
    
      </div>
    );
  }
  export default NavBar;