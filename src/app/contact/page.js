import React from 'react';
// import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import ContactContent from '@/src/components/contact/ContactContent';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV2 from '@/src/components/header/HeaderV2';

export const metadata = {
    title: "Contact - LAPS Projects and Logistics | Mining & Industrial Solutions"
}

const Contact = () => {
    return (
        <>
            <HeaderV2 />
            <BreadCrumb title="Contact Us" breadCrumb="contact" />
            <ContactContent />
            {/* <BrandV1 /> */}
            <FooterV1 />
        </>
    );
};

export default Contact;