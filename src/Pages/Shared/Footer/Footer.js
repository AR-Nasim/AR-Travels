import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <h5>Contact Us</h5>
                <div>
                    <span>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-instagram"></i>
                    </span>
                </div>
                <small><i className="far fa-copyright"></i> AR Travels 2021. All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;