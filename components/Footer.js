import styles from '../styles/Home.module.css'

export default function Footer() 
{
    return (
            // <footer className={styles.footer}>
            //     <a
            //     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     >
            //     Powered by{' '}
            //     <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            //     </a>
            // </footer>
            <>
                <footer className="container mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3 md:px-24 px-12 my-12">
                        <section>
                            <h4>General Resourcess</h4>
                            <ul>
                                <li>A</li>
                                <li>b</li>
                                <li>c</li>
                                <li>d</li>
                                <li>e</li>
                                <li>f</li>
                            </ul>
                        </section>
                        <section>
                            <h4>More</h4>
                            <ul>
                                <li>A</li>
                                <li>b</li>
                                <li>c</li>
                                <li>d</li>
                                <li>e</li>
                                <li>f</li>
                            </ul>
                        </section>
                        <section>
                            <h4>About Us</h4>
                            <ul>
                                <li>A</li>
                                <li>b</li>
                                <li>c</li>
                                <li>d</li>
                                <li>e</li>
                                <li>f</li>
                            </ul>
                        </section>
                        <section>
                            <h4>Legal</h4>
                            <ul>
                                <li>A</li>
                                <li>b</li>
                                <li>c</li>
                                <li>d</li>
                                <li>e</li>
                                <li>f</li>
                            </ul>
                        </section>
                    </div>
                </footer>
            </>
        )
}