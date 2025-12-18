import { Card, Col, Divider, Image, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import AOS from 'aos';

const Choose = () => {
    const { Title, Paragraph } = Typography
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <div style={{ backgroundColor: '#ededed' }}>
            <div className="container py-5 ">
                <Row data-aos="fade-up" data-aos-delay="200" >
                    <Col span={24} >
                        <Title level={1} className='text-center' >WHY CHOOSE US?</Title>
                    </Col>
                </Row>
                <Row gutter={[18, 18]} >
                    <Col xs={24} sm={24} md={12} lg={8} data-aos="fade-up" data-aos-delay="100" >
                        <Card hoverable className="rounded-5 shadow text-center" >
                            <Image src='https://img.icons8.com/?size=100&id=57926&format=png&color=000000' alt="TRUST" width={70} height={70} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={3} style={{ height: '60px' }} className='my-2' >TRUSTED BY LEADING BRANDS</Title>
                            <Paragraph style={{ height: '110px' }} >We have earned long-term partnerships with well-known Pakistani fashion and textile brands. Our reliability, transparency, and commitment to excellence make us a preferred fabric supplier.</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} data-aos="fade-up" data-aos-delay="200" >
                        <Card hoverable className="rounded-5 shadow text-center" >
                            <Image src='https://img.icons8.com/?size=100&id=23535&format=png&color=000000' alt="QUALITY" width={70} height={70} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={3} style={{ height: '60px' }} className='my-2' >UNMATCHED FABRIC QUALITY</Title>
                            <Paragraph style={{ height: '110px' }} >Our clients consistently appreciate the superior quality of our fabrics. Each product is carefully manufactured to ensure durability, comfort, and consistency, meeting both local and international textile standards.</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} data-aos="fade-up" data-aos-delay="300" >
                        <Card hoverable className="rounded-5 shadow text-center" >
                            <Image src='https://img.icons8.com/?size=100&id=yzkidsOEr2yT&format=png&color=000000' alt="DELIVERY" width={70} height={70} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={3} style={{ height: '60px' }} className='my-2' >RELIABLE & ON-TIME DELIVERY</Title>
                            <Paragraph style={{ height: '110px' }} >We are known for meeting deadlines without compromising quality. Customers value our dependable supply chain and timely deliveries, allowing them to plan production and launches with confidence.</Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Choose