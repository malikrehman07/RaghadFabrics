import { Col, Image, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';

const Gallery = () => {
    const { Title, Paragraph } = Typography
    useEffect(() => {
            AOS.init({ duration: 1000, once: true });
        }, []);
    return (
            <div className="container py-5" >
                <Row data-aos="fade-up" data-aos-delay="200" >
                    <Col span={24} className='text-center' >
                        <Title level={1} >Gallery</Title>
                    </Col>
                </Row>
                <Row gutter={[24, 24]} className='mt-4' >
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="100"   >
                        <Image src="https://res.cloudinary.com/djpvxvokp/image/upload/v1765285561/Gallery_2_m3hgdt.jpg" alt="Raghad Fabrics" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="200" >
                        <Image src="https://res.cloudinary.com/djpvxvokp/image/upload/v1765285561/Gallery_3_uzeorv.jpg" alt="Raghad Fabrics" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="300" >
                        <Image src="https://res.cloudinary.com/djpvxvokp/image/upload/v1765285560/Gallery_4_gvgffv.jpg" alt="Raghad Fabrics" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="400" >
                        <Image src="https://res.cloudinary.com/djpvxvokp/image/upload/v1765285678/Gallery_6_cfuvsb.jpg" alt="Raghad Fabrics" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="500" >
                        <Image src="https://res.cloudinary.com/djpvxvokp/image/upload/v1765285679/Gallery_2_pnugjh.jpg" alt="Raghad Fabrics" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} className='d-flex flex-coulmn justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="600" >
                        <Image src="https://res.cloudinary.com/djpvxvokp/image/upload/v1765285560/Gallery_akxtua.jpg" alt="Raghad Fabrics" style={{ borderRadius: '2%' }} className='object-fit-cover ' width="350px" height='250px' />
                    </Col>
                </Row>
            </div>
    )
}

export default Gallery