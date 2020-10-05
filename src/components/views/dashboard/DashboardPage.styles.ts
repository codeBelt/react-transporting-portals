import { makeStyles } from '@material-ui/styles';
import { createStyles } from '@material-ui/core/styles';

export const useDashboardPageStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  })
);
