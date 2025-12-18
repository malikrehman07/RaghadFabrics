import { Typography } from 'antd';
import React from 'react'

const logos = [
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1766056866/client_11_m2yvd9.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1766056866/client_12_cagh0h.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1766056866/client_15_o951aa.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1766056866/client_13_czzrfa.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1766056866/client_14_dsvfau.svg",
];
const Clients = () => {
    const { Title } = Typography;
    const allLogos = [...logos, ...logos, ...logos]; // triple duplication

    return (
        <section className="trusted-by-section py-5">
            <Title level={1} >Our Clients</Title>
            <div className="logos-wrapper">
                <div className="logos-track">
                    {allLogos.map((logo, index) => (
                        <img key={index} src={logo} className="trusted-logo" alt="clients" />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Clients