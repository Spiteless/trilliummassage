import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { makeStyles, Container, Checkbox, TextField, FormControlLabel, FormControl, Button } from '@material-ui/core';

import HeroImageFeature from '../features/HeroImageFeature'
import EmailSignupFeature from '../features/EmailSignupFeature'
import ServicesFeature from '../features/ServicesFeature'
import VideoLinkFeature from '../features/VideoLinkFeature'
import PricingFeature from '../features/PricingFeature'
import UserReviewFeature from '../features/UserReviewFeature'
import ContactFormLandingPage from '../features/ContactFormLandingPage'


const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },

  main: {
    padding: '5rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      '& :hover': {
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        transition: 'color 0.15s ease, border 0.15s ease',
      },
    },
  },

  footer: {
    width: '100%',
    height: 100,
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
  },

  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
    '& a:hover': {
      textDecoration: 'underline',
    },
    '& a:focus': {
      textDecoration: 'underline',
    },
    '& a:active': {
      textDecoration: 'underline',
    },
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },

  description: {
    textAlign: 'center',
    lineHeight: 1.5,
    fontSize: '1.5rem',
  },

  code: {
    background: '#fafafa',
    borderRadius: 5,
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  },

  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 800,
    marginTop: '3rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
    },
  },

  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    border: '1px solid grey',
    borderRadius: 10,
    width: '45%',

    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
    // '& :hover': {
    //   backgroundColor: "green",
    //   border: '5px solid red',
    // transition: 'color 0.15s ease, border 0.15s ease',
    //   color: theme.palette.secondary.main,
    //   // borderColor: theme.palette.secondary.main,
    // },
    // '& :focus': {
    //   backgroundColor: "green",
    //   color: theme.palette.secondary.main,
    //   borderColor: theme.palette.secondary.main,
    // },
    // '& :active': {
    //   backgroundColor: "green",
    //   color: theme.palette.secondary.main,
    //   borderColor: theme.palette.secondary.main,
    // },
    '& h2': {
      margin: '0 0 1rem 0',
      fontSize: '1.5rem',
    },
    '& p': {
      margin: 0,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
  },

  logo: {
    height: '1em',
    marginLeft: '0.5rem',
  },
}));

export default function Home() {
  const sx = useStyles();
  return (
    <Container className={sx.container}>
      <Head>
        <title>Trillium Massage</title>
        <meta name="description" content="Kansas City Massage Therapist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={sx.main}>
        <HeroImageFeature />
        <EmailSignupFeature />
        {/* <ViewSessionPublic /> */}
        <ServicesFeature />
        <VideoLinkFeature />
        <PricingFeature />
        <UserReviewFeature />
        <ContactFormLandingPage />
      </main>
    </Container>
  );
}
