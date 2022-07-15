import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IcelandPost from '../blog/blogDump/IcelandPost'


function Main() {
  return (
    <Grid
      item
      xs={12}
      md={11}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <IcelandPost/>
    </Grid>
  );
}

export default Main;