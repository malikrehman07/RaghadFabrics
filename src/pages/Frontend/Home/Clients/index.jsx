import { Typography } from 'antd';
import React from 'react'

const logos = [
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765283606/client_lasays.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765283396/client_2_sswcrq.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765283607/client_3_bhibaa.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765283607/client_1_xaj447.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765283606/client_2_daf3if.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765283841/client_4_aji8tw.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765283841/client_5_kazusm.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765283841/client_6_pskje9.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765283841/client_7_jjyxag.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765284090/client_8_ns5ej2.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765284090/client_9_vlcfjs.svg",
    "https://res.cloudinary.com/djpvxvokp/image/upload/v1765284089/client_10_kek8ft.svg",
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
                        <img key={index} src={logo} className="trusted-logo" alt="" />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Clients