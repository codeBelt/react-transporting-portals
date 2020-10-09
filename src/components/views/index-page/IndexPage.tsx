import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ProTip } from '../../ui/pro-tip/ProTip';
import Link from '../../shared/Link';

interface IProps {}

export const IndexPage: React.FC<IProps> = (props) => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the home page.
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
      </Box>
    </Container>
  );
};
