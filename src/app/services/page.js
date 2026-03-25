import React from 'react';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV2 from '@/src/components/header/HeaderV2';
import ServiceV3 from '@/src/components/service/ServiceV3';

export const metadata = {
    title: "Services - Euildint Construction Building NextJS Template"
}

const Services = () => {
    return (
        <>
            <HeaderV2 />
            <BreadCrumb title="Service Page" breadCrumb="services" />
            <ServiceV3 showFull={true} />
            <FooterV1 />
        </>
    );
};

export default Services;