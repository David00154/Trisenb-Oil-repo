import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={'md:mt-3 mt-24'}>
        <Head>
          <title>Trisenb Oil Services Nig. Ltd.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header class="">
          <h1 className={[styles.title]}>
          Welcome to 
            <a className="text-black" href="https://www.trisenboilservices.com">Trisenb Oil Services Nig. Ltd</a>
            </h1>
              <p className="text-center leading-6 text-gray-500 md:text-xl text-base md:mx-24 mx-5 my-5 font-normal">
              Precision Calibration Centre with National / International Traceability for Temperature, Dimensional, Pressure, Integrity Testing / Leak Detection and Mechanical Engineering Services.
              </p>
              <div className="flex md:flex-row flex-col items-center">
                <a className="bg-blue-600 px-6 py-3 mx-5 cursor-pointer text-white text-center rounded-md text-lg md:mr-5 font-normal hover:shadow-md hover:bg-blue-700">Know More</a>

                <a className="bg-gray-100 px-6 py-3 cursor-pointer mx-5 text-gray-500 text-center shadow-md rounded-md md:m-0 mt-5 text-lg font-normal hover:bg-gray-200">Our Services</a>
              </div>
        </Header>

        <main className="">
          <div className={styles.container}>
            <section className={'md:px-24 px-4'}>
              <div className="">
                <h2 className="font-medium md:text-3xl text-2xl text-center">
                  TRISENB OIL SERVICES NIG. LTD is an indigenous company carrying out calibration activity.
              </h2>
                <hr className="bg-blue-600 h-1 my-5 mx-8 md:mx-52" />
                  <p className="mt-5 md:text-lg text-md text-center font-normal leading-7">
                    <span>Trisenb Oil Services</span> has been trained on enhancing skills of internal audit for IEC/ISO 17025 - 2015 general requirements for the competence of testing and calibration laboratory.
                    Trisenb Oil Services has put in place quality system as derived from ISO 9001: 2015 (‘Criteria Regarding Company Management for the Quality and Company System’).
                    Satisfying the norm. API Q1 9TH EDITION specification for quality management system requirement.
          
                  </p>
              </div>
            </section>
            <section className={'mt-16 md:px-24 px-4'}>
              <div className="grid md:grid-rows-1 grid-rows-4 md:grid-cols-4 md:gap-8 gap-y-4">
                <div className="text-left">
                <h3 className="font-medium text-2xl">TECHNIQUE.</h3>
                <p className="my-5 md:text-lg text-md font-normal leading-6">
                    <span>1</span> Equipment  verification
                    <br />
                   <span>-</span> Clearly identified.
                   <br />
                   <span>-</span> Approved by client (certification and standard).
                   <br />
                   <span>-</span> Suitable for calibration/integrity test pressure and temperature.
                   <br />
                   <span>-</span> Test pressure rating verified.
                   <br />
                   <span>2</span> Assembly verification.
                   <br />
                   <span>-</span> Connections verified during ...
                </p>
    
                <a  href="/about/#technique" className="px-3 py-2 text-center bg-blue-600 text-lg text-white font-normal rounded-md">More &gt;&gt;</a>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-2xl">COMPANY AT A GLANCE.</h3>
                  <p className="my-5 md:text-lg text-md font-normal leading-6">
                      Trisenb Oil Services is a progressive company and promoted by a group of qualified Engineers and Technicians having rich experience of over 17 years in calibration, testing and Mechanical Engineering services. 

                      Trisenb Oil Services has more than 10 clients in Nigeria. The company ...
                      </p>
                  <a className="px-3 py-2 text-center bg-blue-600 cursor-pointer text-lg text-white font-normal rounded-md">More &gt;&gt;</a>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-2xl">OCCUPATIONAL HEALTH POLICY.</h3>
                  <p className="my-5 md:text-lg text-md font-normal leading-6">
                      It is our policy to help Trisenb employees to care for their own health. As regards occupational health, the policy promotes a workplace that protect the health of Trisenb employees and the surrounding community. The policy emphasizes ...
                  </p>
                    <a className="px-3 py-2 text-center bg-blue-600 cursor-pointer text-lg text-white font-normal rounded-md">More &gt;&gt;
                    </a>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-2xl">VESSEL INTERNAL INSPECTION.</h3>
                  <p className="my-5 md:text-lg text-md font-normal leading-6">
                      <span>These includes:</span>
                      <br />
                      Pressure vessel internal components inspection of baffle, weir and vane distributors
                      Detection of crack on plates and weld joints.
                      Daniel orifice meter maintenance.
                      Replacement of ancillary equipment
                      Scrubber instrument air distribution system ...

                  </p>
                    <a className="px-3 py-2 text-center bg-blue-600 cursor-pointer text-lg text-white font-normal rounded-md">More &gt;&gt;
                    </a>
                </div>
              </div>
            </section>
            <section className={'mt-16 md:px-24 px-4'}>
              <div>
                  <h2 className="font-medium md:text-3xl text-2xl text-center">
                      Quality HSE Plan
                  </h2>
                  <hr className="bg-blue-600 h-1 my-5 mx-8 md:mx-80" />
                  <p className="my-5 md:text-lg text-md text-left font-normal leading-7">
                      The aim and objectives of Trisenb Oil Services Nigeria Limited HSE Plan is
                      to review in details the scope of the project, identify all hazards and put in
                      place control measures in order to ensure that :
                      <br />
                      <span>-</span> Trisenb oil services HSE objectives and those of the client are accomplished.
                      <br />
                      <span>-</span> HSE targets and objectives for the project is defined.
                      <br />
                      <span>-</span> HSE action plan and targets are all understood.
                    </p>
              </div>
            </section>
            <section className={'mt-16 md:px-24 px-4'}>
              <div className="">
                  <h2 className="font-medium md:text-3xl text-2xl text-center">
                      Scope Of Work
                  </h2>
                  <hr className="bg-blue-600 h-1 my-5 mx-8 md:mx-80" />
                  <p className="my-5 md:text-lg text-md text-left font-normal leading-7">
                      Provision of calibration and testing services through qualified and 
                      experienced Engineers and Technicians. Instrumentation, testing and 
                      maintenance of equipment used in the oil and gas industries. 
                      The calibration and testing services are;
                      <br />
                      <span>1</span> Calibration of pressure , temperature and differential recorders
                      <br />
                      <span>2</span> Calibration of pressure relief valves certification and servicing.
                      <br />
                      <span>3</span> Calibration and certification of pressure and temperature transmitters.
                      <br />
                      <span>4</span> Calibration of pressure control valves and servicing.
                      <br />
                      <span>5</span> Calibration of gas reducing control valves.

                      </p>
                      <a className="px-3 py-2 text-center bg-blue-600 text-lg text-white font-normal rounded-md">More &gt;&gt;</a>
              </div>
            </section>
            <section className={''}>
                <div className="mt-16 md:px-24 px-4">
                    <h2 className="font-medium md:text-3xl text-2xl text-center">
                        Our Partners
                    </h2>
                    <hr className="bg-blue-600 h-1 my-3 mx-8 md:mx-52" />
                    <p className="my-5 md:text-lg text-md text-center font-normal leading-7">
                        We work closely with our partners to deliver excellence on any project we undertake
                    </p>
                </div>
                <div className="our-partners">
                  <img src="/images/img1.jpg" />
                  <img src="/images/img2.jpg" />
                  <img src="/images/img3.jpg" />
                  <img src="/images/img4.jpg" />
                  <img src="/images/img1.jpg" />
                  <img src="/images/img2.jpg" />
                  <img src="/images/img1.jpg" />
            </div>
            </section>
            <section className={'w-full mt-16'}>
            <div className="w-screnn text-white mt-8 flex md:flex-row flex-col">
            <div className="bg-blue-500 p-10 text-center md:w-1/4">
                <h3>Spanning Over</h3>
                <span className="font-normal text-6xl">42</span>
                <h3>Years of Experience</h3>
            </div>
            <div className="bg-blue-600 p-10 text-center md:w-1/4">
                <h3>Spanning Over</h3>
                <span className="font-normal text-6xl">42</span>
                <h3>Years of Experience</h3>
            </div>
            <div className="bg-blue-700 p-10 text-center md:w-1/4">
                <h3>Spanning Over</h3>
                <span className="font-normal text-6xl">42</span>
                <h3>Years of Experience</h3>
            </div>
            <div className="bg-blue-800 p-10 text-center md:w-1/4">
                <h3>Spanning Over</h3>
                <span className="font-normal text-6xl">42</span>
                <h3>Years of Experience</h3>
            </div>
        </div>
            </section>
          </div>
        </main>

      <Footer />
      </div>
      <style jsx>{`
        p span{
          font-weight: 700;
          color: rgb(29, 28, 28);
        }

        .our-partners {
          display: flex;
          flex-direction: row;
          width: 100%;
          overflow-x: auto;
        }

        .our-partners img {
          height: 172px;
          width: 258px;
          margin-right: .8rem;
      }
      `}</style>
    </>
  )
}
