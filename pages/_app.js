import Nav from '../components/Nav';
// import Router from 'next/router'
import '../styles/utils.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) 
{
  return (
          <>
            <Nav />
            <Component {...pageProps} />
          </>
        ) 
}

export default MyApp
