import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'

export default function Services() {
  return (
    <>
      <div className={'md:mt-3 mt-24'}>
        <Head>
          <title>Our Services | Trisenb Oil Services Nig. Ltd.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header class="">
          <h1 className={[styles.title]}>
            Our Services & Policy
            </h1>
              
        </Header>

        <main className="">
          <div className={styles.container}>
            
          </div>
        </main>

      <Footer />
      </div>
    </>
  )
}