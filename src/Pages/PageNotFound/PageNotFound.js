import React from 'react';
import pageNotFoundImg from '../../images/pageNotFound.jpg';

const PageNotFound = () => {
    return (
        <div className="mt-5 pt-5">
            <img style={{width:"40%"}} src={pageNotFoundImg} alt="" />
            <h3 className="text-danger p-4">Page Not Found!!</h3>
        </div>
    );
};

export default PageNotFound;