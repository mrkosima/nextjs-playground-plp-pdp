import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

export default function App({ Component, pageProps, headerId }: AppProps & { headerId: string }) {
  return (
    <Layout headerId={headerId}>
      <Component {...pageProps} />
    </Layout>
  )
}


App.getInitialProps = async () => {
  const { id } = await fetch('http://localhost:3000/api/header').then(res => res.json());
  console.log('[APP] getInitialProps', { id });
  return {
    headerId: id,
  }
}
