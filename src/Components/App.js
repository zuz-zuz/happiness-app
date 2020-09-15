import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './image1.JPG'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
];

const mainFeaturedPost = {
  title: 'Main picture',
  description:
    "Something",
  image: '/image1.JPG',
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    image: '/image1.JPG',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    image: '/image1.JPG',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'This is what the project is about.',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="A PORTION OF HAPPINESS" sections={sections} />
        <main>
          {/* namiesto MainFeaturedPost dam logo alebo obrazok */}
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* tu namiesto FeaturedPost dam random obrazky ako priklady co ti moze vyjst */}
          <Grid container spacing={4}>
            {featuredPosts.map((post) => <FeaturedPost key={post.title} post={post} />)}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
      <img src={''} alt={'Faro'} hight={500} />
    </React.Fragment>
  );
}