import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Weather from '../Features/Weather/Weather';
import HeartBeat from '../Features/Heartbeat/heartBeat';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
});

export default () => {
  const classes = useStyles();

  const name = "Bob Xu";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.grow}>
          {name} EOG React Visualization Assessment
        </Typography>
        <HeartBeat />
        <Weather />
      </Toolbar>
    </AppBar>
  );
};
