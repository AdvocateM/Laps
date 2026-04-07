import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServiceV2 = ({ service }) => {
    const { id, title, text2, thumb2, thumbIcon2 } = service || {};

    const imageSrc = thumb2
        ? `/assets/images/service/${thumb2}`
        : '/assets/images/service/default.png';

    const iconSrc = thumbIcon2
        ? `/assets/images/service/${thumbIcon2}`
        : '/assets/images/service/default-icon.png';

    return (
        <div className="service-items-box">
            <div className="service-items-content">
                <h4>
                    <Link href={`/service-details/${id || ''}`}>
                        {title || 'Service Title'}
                    </Link>
                </h4>
                <p>{text2 || ''}</p>
            </div>

            <div className="service-items-thumb">
                <Image
                    src={imageSrc}
                    alt="service image"
                    width={350}
                    height={220}
                />

                <div className="service-items-icon">
                    <Image
                        src={iconSrc}
                        alt="service icon"
                        width={35}
                        height={35}
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleServiceV2;