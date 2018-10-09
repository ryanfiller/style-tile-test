import React from 'react'

const Favicons = ({ icon }) => {
    return (
        <React.Fragment>
            Favicons
            <div className="favicon-wrapper">
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
                <div className="favicon">
                    <img src={icon} alt='favicon' />
                </div>
            </div>
            <a href={icon} download>Download Favicon</a>
            <a href="https://www.favicon-generator.org/" taget="_blank">favicon-generator.org/</a>
        </React.Fragment>
    )
};

export default Favicons;