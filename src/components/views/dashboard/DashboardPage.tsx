import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Deposits from './components/Deposits';
import Orders from './components/Orders';
import { useDashboardPageStyles } from './DashboardPage.styles';
import { PortalIn } from '../../shared/portals/portals';
import { PortalType } from '../../shared/portals/portals.constants';
import Button from '@material-ui/core/Button';
import Chart from './components/Chart';
import Typography from '@material-ui/core/Typography';

export const DashboardPage = () => {
  const classes = useDashboardPageStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [count, setCount] = useState(0);

  return (
    <Grid container spacing={3}>
      <PortalIn portType={PortalType.AppBar}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          I've been clicked {count} times
        </Button>
      </PortalIn>
      <Grid item xs={12}>
        <Typography variant="h5"> The button has been clicked {count} times</Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  );
};
