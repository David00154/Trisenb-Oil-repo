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
                    About <a href="#"> Trisenb Oil Services</a>
                </h1>
                </Header>
                    <main className="">
                        <div className={styles.container}>
                            <section className={'md:px-24 px-4'} id="overview">
                                <h2 className="font-medium md:text-3xl text-2xl text-center">
                                    INTRODUCTION
                                </h2>
                                <hr className="bg-blue-600 align-left h-1 my-5 mx-8 md:mx-80"/>
                                <div className={'flex md:flex-row flex-col'}>
                                <p className="my-5 md:text-lg text-md text-left font-normal leading-7">
                                    <span>TRISENB OIL SERVICES NIGERIA LIMITED</span> is an indigenous company carrying out calibration activity for Dimensional, Pressure, Electrical, Temperature, Integrity Testing/ Leak Detection and Mechanical Engineering Services in Nigeria for the oil, gas and energy industries
                                    <br/>
                                    <span>Trisenb Oil Services</span> has been trained on enhancing skills of internal audit for <span>IEC/ISO 17025 - 2015</span> general requirements for the competence of testing and calibration laboratory.
                                    <br/>
                                    <span>Trisenb Oil Services</span> has put in place quality system as derived from ISO 9001: 2015 (‘Criteria Regarding Company Management for the Quality and Company System’).
                                    <br/>
                                    Satisfying the norm. API Q1 9TH EDITION specification for quality management system requirement.
                                    <br/>
                                    As a result, <span>TOSNL</span> has developed a strategic plan, quality policy, vision, mission and goals.
                                    <span>
                                        Defines Calibration as à “Precision and Reliability of Instruments for better   tomorrow”
                                    </span>
                                    <br/>
                                    <br/>
                                    <span>DPR MAJOR REGISTRATION CATEGORY</span>
                                    <br/>
                                    <br/>
                                    CALIBRATION SERVICES: NO. DPR/OGISP/20/4573432/N211588.
                                    <br/>
                                    <br/>
                                    INTEGRITY TEST SERVICES: NO. DPR/OGISP/4416977/N210872
                                    <br/>
                                    <br/>
                                    ONSHORE ENVIRONMENTAL/ WASTE MANAGEMENT DPR/OGISP/20/6689614/ N190484.
                                    <br/>
                                    <br/>
                                    <span>NipeX REGISTRATION CATEGORY: SUPPLIER ID. CODE. 6996</span>
                                </p>
                                <img src="/images/img5.jpg" className="md:ml-3 py-5 md:h-96 h-72 w-screen" alt=""/>
                                </div>
                            </section>
                            <section className={'mt-16 md:px-24 px-4'} id="company-at-a-glance">
                                <h2 className={"font-medium md:text-3xl text-2xl text-center"}>COMPANY AT A GLANCE
                                </h2>
                                <hr className="bg-blue-600 align-left h-1 my-5 mx-8 md:mx-80"/>
                            <p className="my-5 md:text-lg text-md text-left font-normal leading-7">
                                Trisenb Oil Services is a progressive company and promoted by a group of qualified Engineers and Technicians having rich experience of over 17 years in calibration, testing and Mechanical Engineering services. 
                                <br />
                                <br />
                                Trisenb Oil Services has more than 10 clients in Nigeria. The company serves the local and international customers through on-shore and off-shore operations.
                                <br />
                                <br />
                                Trisenb Oil Services aims to promote instrument calibration, testing and mechanical engineering services with special emphasis on general competence requirements for the application of proper documentation and many companies are having confidence in our services.
                                <br />
                                <br />
                                At Trisenb Oil Services, we realize that the ISO certification and training programs must translate us in to specific benefits. We believe that will constantly evolve in to meet the challenges of providing more efficient and cost effective solutions.
                                <br />
                                <br />
                                TOSNL is independent Calibration / Testing laboratory and Mechanical Engineering Company. It is not part of any organization. The responsibilities of key personnel is defined and documented. As well as they are free from commercial, financial and other pressures, which might influence her technical judgement. TOSNL will not engage in any activity that may endanger the trust in her independence of judgement and integrity in relation to calibration / testing and mechanical work. The organization chart is given at the end of this chapter.

                            </p>
                            </section>
                            <section className={'mt-16 md:px-24 px-4'} id="occupational-health-policy">
                                <h2 className="font-medium md:text-3xl text-2xl text-center">
                                    OCCUPATIONAL HEALTH POLICY
                                </h2>
                                <hr className="bg-blue-600 align-left h-1 my-5 mx-8 md:mx-80"/>
                                <div className={'flex md:flex-row flex-col'}>
                                <img src="/images/img8.jpg" className="px-4 py-5 md:h-96 h-72 w-screen" alt=""/>
                                <p className="my-5 md:text-lg text-md text-left font-normal leading-7">
                                    It is our policy to help Trisenb employees to care for their own health. As regards occupational health, the policy promotes a workplace that protect the health of Trisenb employees and the surrounding community. The policy emphasizes prevention, education, voluntary participation, personal responsibility and cost effectiveness.
                                    <br />
                                    <br />
                                    Trisenb main involvement is in occupational health. Through improvement of industrial hygiene, ergonomics and safety. The aim is to reduce work related health risks.
                                    <br />
                                    <br />
                                    Health away from work is also a concern of Trisenb Oil Services as it may lead to problem related to work and absenteeism. As a matter of policy therefore, Trisenb Oil Services provides its personnel with various kinds of assistance such as information of medical insurance plans, while recognizing that the ultimate responsibility for personal health lies with the individual.
                                    <br />
                                    <br />
                                    The assistance provided by the policy applies to living condition for those employees, and in some cases their dependent, who are requested to live in company accommodation or who travel on company business. The medical supported may they include, in addition to regular health advice, vaccination, physical checkups, medical evacuation and, under certain frontier situations, audit carried out by medical consultants retained by Trisenb Oil Services.
                                    <br />
                                    <br />
                                    The manager is responsible for the implementation of the Health Policy, with the support of the Health, Safety and Environment Department and the Personnel Department and with the assistance of medical professionals as necessary. Either required by law or retained by Trisenb Oil Services.
                                    <br />
                                    <br />
                                    <br />
                                    Robinson
                                    <br />
                                    Tuboalabo                                                                
                                    <div className={'text-right'}>
                                        Date   15/10/2020 Managing Director.
                                    </div>
                                </p>
                                </div>
                            </section>
                            <section className={'bg-blue-400'}>
                                <div className={'md:px-20 px-4 md:grid my-16 grid-cols-3 gap-7'}>
                                    <div style={{height: 478}}>
                                        <h3 className={'text-center tracking-light text-2xl font-normal'}>Our Strength</h3>
                                        <p className="my-5 md:text-lg text-md text-left font-normal leading-7">
                                            	Our engineers and technicians have experience of over 20years instrument calibration and testing and trained on ISO management series.
                                            <br />
                                            	Highly qualified 3 team members (Degree engineers) and CEO is having rich professional experience (since 1991) of 27 years.
                                            <br />
                                            	Our team have 90% success rate for pressure relief valve calibration and certification from reputed oil drilling rigs and leading name in the Deep Water drilling operations.
                                            <br />
                                            	Insist on continual improvement and cost reduction measures as well as highly informative training gives payback against our cost.
                                        </p>
                                    </div>
                                    <div style={{height: 478}}>
                                        <h3 className={'text-center tracking-light text-2xl font-normal'}>We are Committed For</h3>
                                        <p className="my-5 md:text-lg text-md text-left font-normal leading-7">
                                            	Personal involvement & commitment from first day
                                            <br/>
                                            	Optimum charges
                                            <br/>
                                            	Professional approach
                                            <br/>
                                            	Strengthening clients by system establishment and providing best servicing materials in  areas of calibration, testing and mechanical works to make their project in proper manner
                                            <br/>
                                            	To establish strong control with the help of our wealth of experience system of the latest management techniques
                                        </p>
                                    </div>
                                    <div style={{height: 478}}>
                                        <h3 className={'text-center tracking-light text-2xl font-normal'}>Quality Policy</h3>
                                        <p className="my-5 md:text-lg text-md text-left font-normal leading-7">
                                            We at TRISENB OIL SERVICES NIGERIA LIMITED are committed to achieve total customer satisfaction and thereby achieve leading name in the field of calibration and Testing and Mechanical Engineering services.
                                            We shall achieve this by:
                                            <br/>
                                            <span>•</span>	Developing good professional practices and providing calibration and testing facility that have desired quality in accordance with customer requirements / reference standards to create environment of trust with our customer,
                                            <br/>
                                            <span>•	Complying with the requirements of ISO/IEC 17025:2005  and ISO 9001 : 2015 and continually improve the effectiveness of the management system,</span>
                            
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className={'mt-16 md:px-24 px-4'} id="technique">
                                <h2 className={"font-medium md:text-3xl text-2xl text-center"}>TECHNIQUE
                                </h2>
                                <hr className="bg-blue-600 align-left h-1 my-5 mx-8 md:mx-80"/>
                            <p className="my-5 md:text-lg text-md text-left font-normal leading-7">
                            <span>1</span>	Equipment  verification
                                <br/>
                                <span>-</span>	Clearly identified.
                                <br/>
                                <span>-</span>	Approved by client (certification and standard).
                                <br/>
                                <span>-</span>	Suitable for calibration/integrity test pressure and temperature.
                                <br/>
                                <span>-</span>	Test pressure rating verified.
                                <br/>
                                <span>2</span>	Assembly verification.
                                <br/>
                                <span>-</span>	Connections verified during assembly (proper rating and marching).
                                <br/>
                                <span>-</span>	Connection fittings secured to structure assembly and tightened.
                                <br/>
                                <span>3</span>	Applying pressure verification during calibration
                                <br/>
                                <span>-</span>	Clear exposed work environment
                                <br/>
                                <span>-</span>	Eliminate risk of explosion (over pressure) bleed off air.
                                <br/>
                                <span>-</span>	Pressure must not exceed WP (working pressure). Hence qualified person can only be used and equipment having the rated pressure capacity.
                                <br/>
                                <span>4</span>	Pressure down, bleed off slowly, beware of trapped pressure
                                <br/>
                                <span>5</span>	 Pressure-up verification at site for test calibration pressure requires protection

                            </p>
                            </section>
                        </div>
                    </main>
                <Footer />
                <style jsx>{`
                    p span{
                    font-weight: 700;
                    color: rgb(29, 28, 28);
                    }
                `}</style>
            </div>
        </>
    )
}