import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton'; 
import MenuIcon from '@material-ui/icons/Menu'; 
import Typography from '@material-ui/core/Typography';



class Layout extends Component {
    constructor() {
        super(); 
        this.state = {
            sidebarOpen: false
        }
    }

    toggleSidebar = () => {
        this.setState({
            sidebarOpen : !this.state.sidebarOpen
        })
    }

    getTop = () => {
        if(this.props.top) {
            return this.props.top; 
        } else {
            return <Typography variant="display1">Default top content</Typography>
        }
    }

    getMenu = () => {
        if (this.props.menu) {
            return this.props.menu;
        } else {
            return <Typography variant="display1">Default top content</Typography>
        }
    }

    getMain = () => {
        if (this.props.main) {
            return this.props.main;
        } else {
            return <Typography variant="display1">Default main content</Typography>
        }
    }

    render() {
        return (
            <div>
                <AppBar     
                    position="static">
                    <IconButton onClick={this.toggleSidebar}> 
                        <MenuIcon /> 
                    </IconButton>
                    {this.getTop()}
                </AppBar>
                <Drawer 
                    anchor="left" 
                    open={this.state.sidebarOpen}
                    onClose={this.toggleSidebar}>
                    {this.getMenu()}
                </Drawer>
                <div>
                    {this.getMain()}
                </div>
            </div>
        );
    }
}

export default Layout;
