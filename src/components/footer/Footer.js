import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
        <SocialIcon url="https://twitter.com/Remcolang" network="twitter" style={{marginRight: 15}}/>
        <SocialIcon url="https://www.instagram.com/remcolangemaire/" network="instagram" style={{marginRight: 15}}/>
        <SocialIcon url="https://www.youtube.com/channel/UC-qODza4NJhV_fJfnE1jWww" network="youtube" style={{marginRight: 15}}/>
        <SocialIcon url="https://www.facebook.com/profile.php?id=100008816744304" network="facebook" />
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          <h1>Follow</h1>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;