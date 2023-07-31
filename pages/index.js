import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { redirect } from 'next/navigation'

export default function Home() {
redirect('https://www.payerset.com')
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Redirecting to www.payerset.com" />
        <p className="description">
          Redirecting to www.payerset.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
