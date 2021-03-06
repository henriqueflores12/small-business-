import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { NavLink } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 10
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 10
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  console.log("propsnaveBar", props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            small-business
          </Typography>

          <Link to="/login">
            <Button
              color="inherit"
              onClick={() => {
                if (props.login) {
                  props.setLogin(false);
                } else {
                  props.setLogin(true);
                }
              }}
            >
              {props.login ? "Log out" : "Log in"}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <div className="login">login as {props.user.username}</div>
    </div>

  );
}
