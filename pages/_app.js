import Navbar from '../components/navbar'
import { useRouter } from 'next/router'
import directories from '../db/directories'
import '../styles/main.css'


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let homeBack 

  switch(router.pathname) {
    case '/':
      homeBack = 'backgrounds/Home.jpg'
      break

    case '/directorios':
      homeBack = 'backgrounds/Directorios.jpg'
      break

    case '/directorios/[section]' :
      for ( let i = 0; i < directories.length; i++ ) {
        if ( router.query.section === directories[i].href ) {
          homeBack = '/backgrounds/' + directories[i].bgPath
          break
        }
      }
      break

    default:
      homeBack = 'backgrounds/Home.jpg'
      break
  }

  return (
      <div>
      <Navbar />
      <Component {...pageProps} />
        <style jsx global>
          {`
            body {
              background-image: url(${homeBack});
            }
          `}
        </style>
      </div>
  )
}


