import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServiceV1 = ({ service }) => {
    const {
        id,
        thumb,
        thumbIcon,
        title,
        text,
        btnIcon,
        btnText,
        sideTitle
    } = service || {};

    const imageSrc = thumb
        ? `/assets/images/resource/${thumb}`
        : '/assets/images/resource/default.png';

    const iconSrc = thumbIcon
        ? `/assets/images/resource/${thumbIcon}`
        : '/assets/images/resource/default-icon.png';

    return (
        <div className="service-single-box animate__animated animate__slideInUp">
            <div className="service-thumb">
                <Image
                    src={imageSrc}
                    width={340}
                    height={420}
                    alt="service image"
                />
            </div>

            <div className="service-content">
                <div className="service-icon">
                    <Image
                        src={iconSrc}
                        width={50}
                        height={50}
                        alt="service icon"
                    />
                </div>

                <div className="service-text">
                    <h4>
                        <Link href={`/service-details/${id || ''}`}>
                            {title || 'Service Title'}
                        </Link>
                    </h4>

                    <p>{text || ''}</p>

                    <Link href={`/service-details/${id || ''}`}>
                        {btnText || 'Read More'}{' '}
                        {btnIcon && <i className={btnIcon}></i>}
                    </Link>
                </div>
            </div>

            <div className="service-title">
                <h4>{sideTitle || ''}</h4>
            </div>
        </div>
    );
};

export default SingleServiceV1;