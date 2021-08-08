import { ThemeProvider, CssBaseline } from '@material-ui/core';

// import Header from '../components/header/header';
// import Footer from '../components/footer';
import theme from '../themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
