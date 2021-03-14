import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css'

export default function About() {
    return (
        <>  
            <Head>
                <title>About | Trisenb Oil Services Nig. Ltd.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="md:mt-3 mt-24">
                <Header>
                <h1 className={[styles.title]}>
                    About Us
                </h1>
                </Header>
                <Footer />
            </div>
        </>
    )
}