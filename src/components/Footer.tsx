import React, { useState } from 'react';
import '@Styles/Footer.scss';

const Footer = () => {
    //* Добавим часы в футер через хук usestate
    const performClocks = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        // console.log(`Текущее время - ${hours} ${minutes} ${seconds}`);
    };
    setInterval(performClocks, 1000);

    return (
        <div className="container" id="footer__wrap">
            <div id="footer__content">
                <h4 className="text-center">Created by CYBER</h4>
                <h5 className="text-center">copyright 2022</h5>
            </div>
            <div id="footer__clock" />
        </div>
    );
};

export default Footer;
