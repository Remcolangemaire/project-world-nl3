import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import './blog.scss';
import imgice2 from '../../images/DJI_0040.jpg'

const mainFeaturedPost = {
  title: 'This is our blog',
  description:
    "We post here our newest blogs, this is just everything in one page. You can click on a country below, and check out the blog for that country",
  image: imgice2,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const sidebar = {
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
};

const theme = createTheme();

export default function BlogLand() {
  return (
    <div className='blog-background'>
      <div className='blog-container'>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <main>
              <MainFeaturedPost post={mainFeaturedPost} />
              <hr></hr>
              <Grid container spacing={5} sx={{ mt: 3 }}>
                <Main />
                <Sidebar
                  archives={sidebar.archives}
                />
              </Grid>
            </main>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}