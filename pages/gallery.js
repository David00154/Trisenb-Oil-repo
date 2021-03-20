import {useState} from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GalleryComponent  from '../components/Gallery';
import styles from '../styles/Home.module.css'

export default function Gallery() {
  let [images] = useState(['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg', '/img6.jpg', '/img7.jpg'])
  return (
    <>
      <div className={'md:mt-3 mt-24'}>
        <Head>
          <title>Gallery | Trisenb Oil Services Nig. Ltd.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header class="">
          <h1 className={[styles.title]}>
          Gallery of 
            <a className="text-black" href="https://www.trisenboilservices.com"> Trisenb Oil Services Nig. Ltd</a>
            </h1>
              
        </Header>

        <main className="">
          <div className={styles.container}>
            <section className={'md:px-24 px-4 mb-16'}>
                <div className={'grid md:grid-cols-5 grid-cols-2 gap-1'}>
                  {images.map((image, i) => (
                    <GalleryComponent key={i} src={'/gallery' + image}  />
                  ))}
                </div>
            </section>
          </div>
        </main>

      <Footer />
      </div>
    </>
  )
}
