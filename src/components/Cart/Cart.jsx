import React from 'react';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

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

export default function Cart({quantity}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' style={{margin: '0 auto',textDecoration: 'none', color: 'currentcolor'}}>Ecommerce</Link>
          </Typography>
          {
              quantity > 0 ? <div>
                   <sub style={{ marginBottom: '1rem',fontSize: '1.1em', position: 'absolute',left: '95%',top: '4px'}}>{quantity}</sub>
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <Link to='/cart'> <ShoppingCartIcon /> </Link>
          </IconButton>
              </div>
              :
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ShoppingCartOutlinedIcon />
          </IconButton>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
