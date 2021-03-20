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
            <div className="bg-gray-200 py-1">
                <footer className="container mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-7 gap-4 md:px-24 px-12 my-12">
                        <section>
                            <h4 className={'text-base font-medium mb-2'}>General Services</h4>
                            <ul>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>
                                    Vessel Internal Inspection
                                </li></a>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>Pressure Relief Valve Certification Services</li></a>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>
                                    Calibration Services
                                </li></a>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>
                                    Leak / Pressure Operation
                                </li></a>
                            </ul>
                        </section>
                        <section>
                            <h4 className={'text-base font-medium mb-2'}>More</h4>
                            <ul>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>Our Partners</li></a>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>HSE Plan</li></a>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>Scope Of Wok</li></a>
                            </ul>
                        </section>
                        <section>
                            <h4 className={'text-base font-medium mb-2'}>About Us</h4>
                            <ul>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>Company At A Glance</li></a>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>Our Strength</li></a>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>Occupational Health Policy</li></a>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>Technique</li></a>
                            </ul>
                        </section>
                        <section>
                            <h4 className={'text-base font-medium mb-2'}>Legal</h4>
                            <ul>
                                <a href="#"><li className={'text-base font-normal my-1 text-gray-400'}>Privacy Policy</li></a>
                            </ul>
                        </section>
                        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                    </a>
                    </div>
                </footer>
            </div>
        )
}