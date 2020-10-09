import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../../shared/Link';
import { ProTip } from '../../ui/pro-tip/ProTip';
import { PortalIn } from '../../shared/portals/portals';
import { PortalType } from '../../shared/portals/portals.constants';
import Button from '@material-ui/core/Button';

interface IProps {}

export const AboutPage: React.FC<IProps> = (props) => {
  return (
    <Container maxWidth="sm">
      <PortalIn portType={PortalType.AppBar}>
        <Button variant="contained" color="secondary" onClick={() => alert('Thanks for calling!')}>
          Call Me!
        </Button>
      </PortalIn>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          This the about page.
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
      </Box>
    </Container>
  );
};
