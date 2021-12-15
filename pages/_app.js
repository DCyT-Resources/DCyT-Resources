import '../styles/main.css'
import Image from 'next/image'
import { useRouter } from 'next/router'


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let homeBack 

  if ( router.pathname === '/' ) {
    homeBack = 'Home.jpg'
  } 

  if ( router.pathname === '/directorios' ) {
    homeBack = 'Directorios.jpg'
  }

  return (
      <div>
      <Component {...pageProps} />
        <style jsx global>
          {`
            body {
              background-image: url('backgrounds/${homeBack}');
            }
          `}
        </style>
      </div>
  )
}


