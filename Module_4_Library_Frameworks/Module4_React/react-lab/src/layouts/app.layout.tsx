import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as classes from './app.layout.styles';
import * as imgClasses from './image.layout.styles';

export const AppLayout: React.FC = ({children}) => (
    <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                Welcome to React Lab
                </Typography>
                <div className={imgClasses.rootLogo}>
                    <img className={imgClasses.img} src={require('/images/logo.png')} alt="Logo" />
                </div>
            </Toolbar>
        </AppBar>
        {children}
    </div>
);