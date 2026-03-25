import React from 'react';
// import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV2 from '@/src/components/header/HeaderV2';
import ProjectV1 from '@/src/components/project/ProjectV1';

export const metadata = {
    title: "Projects - LAPS Projects and Logistics | Mining & Industrial Solutions"
}

const Projects = () => {
    return (
        <>
            <HeaderV2 />
            <BreadCrumb title="Project Page" breadCrumb="Projects" />
            <ProjectV1 projectclassName="inner-page" />
            {/* <BrandV1 /> */}
            <FooterV1 />
        </>
    );
};

export default Projects;