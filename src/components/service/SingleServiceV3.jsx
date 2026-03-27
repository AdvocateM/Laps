import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServiceV3 = ({ service }) => {
    const {
        id,
        animation,
        iconThumb,
        title,
        text,
        thumb,
        icon,
        serviceSpace
    } = service || {};

    const iconThumbSrc = iconThumb
        ? `/assets/images/service/${iconThumb}`
        : '/assets/images/service/plant.jpg';

    const thumbSrc = thumb
        ? `/assets/images/service/${thumb}`
        : '/assets/images/service/service1.jpg';

    return (
        <div className={`service-items-box-two ${animation || ''} ${serviceSpace || ''}`}>
            <div className="service-icon-thumb">
                <Image
                    src={iconThumbSrc}
                    width={45}
                    height={45}
                    alt="service icon"
                />
            </div>

            <div className="service-items-title">
                <h4>
                    <Link href={`/service-details/${id || ''}`}>
                        {title || 'Service Title'}
                    </Link>
                </h4>
            </div>

            <div className="service-items-content-two">
                <p>{text || ''}</p>
            </div>

            <div className="service-items-thumb-two">
                <Image
                    src={thumbSrc}
                    width={275}
                    height={240}
                    alt="service image"
                />

                <div className="service-items-icon-two">
                    <Link href={`/service-details/${id || ''}`}>
                        {icon && <i className={icon}></i>}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceV3;