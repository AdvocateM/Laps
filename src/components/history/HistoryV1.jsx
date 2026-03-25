import React from 'react';
import Image from 'next/image';
import sectionShape from '@/public/assets/images/about/section-shape.png'
import history1 from '@/public/assets/images/resource/history1.png'
import Link from 'next/link';
import HistoryV1Data from '../../../public/assets/jsonData/history/HistoryV1Data.json'
import SingleHistoryCounter from './SingleHistoryCounter';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const HistoryV1 = () => {
    return (
        <>
            <div className="heistory-area animate__slideInUp">
                <div className="container">
                    <div className="row history-bg">
                        <div className="col-lg-4 col-md-12">
                            <div className="section-title">
                                <div className="section-shape">
                                    <Image src={sectionShape} alt="image" />
                                </div>
                                <div className="section-sub-title">
                                    <h4>our history</h4>
                                </div>
                                <div className="section-main-title">
                                    <h2>Company History,</h2>
                                    <h2>Present And The</h2>
                                    <h2>Future</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="history-single-box">
                                <div className="history-content">
                                    <h4><Link href="#" onClick={handleSmoothScroll}>Established 2016</Link></h4>
                                    <p>LAPS Projects and Logistics was founded with a clear vision: to provide exceptional mining and industrial services to clients across South Africa, built on a foundation of integrity and excellence.</p>
                                    <Link href="/about" onClick={handleSmoothScroll}>Discover More <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="history-items-box">
                                <div className="history-items-thumb">
                                    <Image src={history1} alt="LAPS Projects History" />
                                    <div className="history-items-content">
                                        <div className="history-text">
                                            <h4><Link href="#" onClick={handleSmoothScroll}>Our Goal is To Deliver Safe & Reliable Industrial Solutions</Link></h4>
                                        </div>
                                        <div className="history-icon">
                                            <Link href="/about" onClick={handleSmoothScroll}><i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-30">
                                <div className="col-lg-5 col-md-6">
                                    <div className="history-single-box">
                                        <div className="history-content">
                                            <h4><Link href="#" onClick={handleSmoothScroll}>Led By Industry Expertise</Link></h4>
                                            <p>Under the leadership of Maven Malapane, our team brings decades of combined experience from Glencore, Xstrata, and Samancor, ensuring world-class service delivery.</p>
                                            <Link href="/about" onClick={handleSmoothScroll}>Meet Our Team <i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-12">
                                    <div className="counter-area">
                                        <div className="row">
                                            {HistoryV1Data.map(history =>
                                                <div className="col-lg-4 col-md-4" key={history.id}>
                                                    <SingleHistoryCounter history={history} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HistoryV1;