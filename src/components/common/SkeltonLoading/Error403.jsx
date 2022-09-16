import React from "react";

const Error403 = () => {



    return (
        <div className="container-xxl container-p-y text-center">
            <div className="misc-wrapper">
                <h1 className="mb-2 mx-2 fw-bolder">401</h1>
                <h1 className="mb-2 mx-2 fw-bolder">Forbidden :(</h1>
                <p className="mb-4 mx-2">We couldn't find the page you are looking for</p>
                <div className="mt-3">
                    <img
                        src="\assets\img\page-misc-error-light.png"
                        alt="page-misc-error-light"
                        width="500"
                        className="img-fluid"
                        data-app-light-img="illustrations/page-misc-error-light.png"
                        data-app-dark-img="illustrations/page-misc-error-dark.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default Error403;
