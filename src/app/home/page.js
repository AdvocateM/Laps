import React from 'react';
import AboutV2 from '@/src/components/about/AboutV2';
import BannerV2 from '@/src/components/banner/BannerV2';
import CallToActionV1 from '@/src/components/callToAction/CallToActionV1';
import FeatureV2 from '@/src/components/feature/FeatureV2';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderTopBarV2 from '@/src/components/header/HeaderTopBarV2';
import HeaderV2 from '@/src/components/header/HeaderV2';
import HistoryV1 from '@/src/components/history/HistoryV1';
import ServiceV2 from '@/src/components/service/ServiceV2';
import TeamV1 from '@/src/components/team/TeamV1';
import TestimonialV1 from '@/src/components/testimonial/TestimonialV1';

export const metadata = {
    title: "Home - LAPS Projects and Logistics - Mining, Construction & Industrial Services"
}

const Home2 = () => {
    return (
        <>
            <HeaderTopBarV2 topBarclassName="style-two" />
            <HeaderV2 />
            <BannerV2 />
            <FeatureV2 />
            <AboutV2 />
            <HistoryV1 />
            <CallToActionV1 />
            <ServiceV2 />
            <TeamV1 />
            <TestimonialV1 />
            <FooterV1 />
        </>
    );
};

export default Home2;