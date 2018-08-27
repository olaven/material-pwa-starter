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
    
    // these three methods are just shells, but I think they improve readability in .render
    getTop = () => {
        return this.returnPropsOrDefaultMessage("top"); 
    }

    getMenu = () => {
        return this.returnPropsOrDefaultMessage("menu"); 
    }

    getMain = () => {
        return this.returnPropsOrDefaultMessage("main"); 
    }

    /**
     * Returns the JSX-element in specified prop name if it is present.
     * If not, it returns a default text
     * @param name name of prop
     */
    returnPropsOrDefaultMessage = (name) => {
        if(this.props[name]) {
            return this.props[name]; 
        } else {
            return <Typography variant="display1">Default {name} content</Typography>
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
