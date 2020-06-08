import React, { Component } from 'react';
import { Button, ThemeProvider, Typography, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import theme from '../theme/theme';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "../pages/mynav.css"
import Home from '@material-ui/icons/Home';




class Navbar extends Component {
    render() {
        return (
            <ThemeProvider theme={theme} >
            <Router>
                <AppBar className="nav">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        </IconButton>
                      <div style={{}} className="left">
                      <Home className="home"/>
                        <Link to="/home" style={{ textDecoration: 'none' }} >  <ul>HOME</ul></Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>  <ul >CONTACT </ul></Link>
                        </div>
                        <div className="right">

                        <Link to="/signup" style={{ textDecoration: 'none' }}> <ul >SIGNUP</ul></Link>
                        <Link to="/login" style={{ textDecoration: 'none' }}>  <ul >SIGNIN</ul></Link>
                        </div>

                    </Toolbar>

                </AppBar>

                   </Router>
            </ThemeProvider>
        );
    }
}



export default Navbar;
