import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // console.log(value);
  return (
    <>
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
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {/* <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        // className={classes.root}
      >
        <BottomNavigationAction
          label="Income Calculator"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Distribution Calculator"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Other Calculator"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation> */}
    </>
  );
}
