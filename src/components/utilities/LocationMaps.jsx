import React from 'react';

const LocationMaps = () => {
    return (
        <>
            <div className="map-area">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2179.9619356462154!2d30.206237556403277!3d-24.7326188537886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1773843059366!5m2!1sen!2sza" width="1920" height="608" style={{ border: 0 }} allowfullscreen loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationMaps;