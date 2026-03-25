import Image from 'next/image';
import React from 'react';
import SingleProgress from './SingleProgress';
import SingleAboutV1 from './SingleAboutV1';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import AboutV1Data from '../../../public/assets/jsonData/about/AboutV1Data.json'
import AboutProgressData from '../../../public/assets/jsonData/about/AboutProgressData.json'
import sectionShape from '@/public/assets/images/about/section-shape.png'

const AboutV1Content = () => {
    return (
        <>
            <div className="section-title">
                <div className="section-shape">
                    <Image src={sectionShape} alt="image" />
                </div>
                <div className="section-sub-title">
                    <h4>{AboutV1Data[0]?.subTitle || "Mining & Industrial Solutions"}</h4>
                </div>
                <div className="section-main-title about">
                    <h2>{AboutV1Data[0]?.title1 || "Delivering Reliable"}</h2>
                    <h2>{AboutV1Data[0]?.title2 || "Project Execution With Integrity"}</h2>
                </div>
            </div>
            <div className="about-content animate__animated animate__slideInUp">
                <div className="about-discribtion">
                    <p>{AboutV1Data[0]?.text || "Laps Projects and Logistics is a registered company providing professional key services to clients across South Africa. Our focus spans underground sweepings, plant maintenance, refractory repairs, fuel system management, and construction. Led by Director Maven Malapane, we are committed to minimizing expenditure while maximizing productivity and safety."}</p>
                </div>

                <div className="process-ber-plugin">
                    <div className="progress-items">
                        {AboutProgressData.map(progress =>
                            <SingleProgress progress={progress} key={progress.id} />
                        )}
                    </div>
                </div>
                <div className="row">
                    {AboutV1Data.map(about =>
                        <div className="col-lg-6 col-md-6" key={about.id}>
                            <SingleAboutV1 about={about} />
                        </div>
                    )}
                </div>
                <div className="eulding-btn about">
                    <Link href="#" onClick={handleSmoothScroll}>Discover More <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                </div>
            </div>
        </>
    );
};

export default AboutV1Content;