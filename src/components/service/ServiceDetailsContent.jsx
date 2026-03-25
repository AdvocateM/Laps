"use client"
import React from 'react';
import Image from 'next/image';
import SearchWidget from '../widgets/SearchWidget';
import CategoriesWidget from '../widgets/CategoriesWidget';
import TagsWidget from '../widgets/TagsWidget';
import ServiceDetailsData from '../../../public/assets/jsonData/service/ServiceDetailsData.json'

const ServiceDetailsContent = ({ serviceInfo }) => {
    // If serviceInfo is passed from parent, use it, otherwise use the first service from JSON
    const service = serviceInfo || ServiceDetailsData.serviceData[0];

    return (
        <>
            <div className="service-details-area animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="service-details-single-box mb-30">
                                        <div className="service-details-thumb">
                                            <Image 
                                                src={service.thumb || "/assets/images/service/service-details1.jpg"} 
                                                alt={service.title || "Service Image"}
                                                width={800}
                                                height={500}
                                                className="w-100 h-auto rounded-4"
                                            />
                                        </div>
                                        <div className="service-details-content">
                                            <h4 className="mb-3">{service.title || "Service Title"}</h4>
                                            <p className="text-secondary">{service.description || service.details || "Service description goes here."}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional details section if available */}
                                {service.details && service.details !== service.description && (
                                    <div className="col-lg-12">
                                        <div className="service-details-single-box">
                                            <div className="service-details-content">
                                                <h4 className="mb-3">Service Overview</h4>
                                                <p className="text-secondary">{service.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Goal list section if available */}
                                {service.goalList && service.goalList.length > 0 && (
                                    <div className="col-lg-12">
                                        <div className="service-details-single-box">
                                            <div className="service-details-content">
                                                <h4 className="mb-3">{service.serviceGoal || "Key Features"}</h4>
                                                <p className="text-secondary mb-3">{service.goalDescription || "What we deliver:"}</p>
                                                <ul className="list-unstyled">
                                                    {service.goalList.map((item, index) => (
                                                        <li key={index} className="d-flex mb-2">
                                                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                                            <span className="text-secondary">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 mt-30 mt-lg-0">
                            <SearchWidget />
                            <CategoriesWidget categories={ServiceDetailsData.mainServices} />
                            <TagsWidget tags={ServiceDetailsData.popularTags} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;