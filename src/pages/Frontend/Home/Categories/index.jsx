import { Card, Col, Image, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';

const Categories = () => {
    const { Title, Paragraph } = Typography
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <div style={{backgroundColor:'#ededed'}}>
            <div className='container py-5'>
                <Title level={1} data-aos="fade-up" data-aos-delay="200" className='text-center'>Popular Categories</Title>
                <Row gutter={[12, 12]} className='mt-5' >
                    <Col xs={24} sm={12} md={12} lg={8} data-aos="fade-up" data-aos-delay="100" >
                        <Card hoverable className="rounded-5 shadow text-center" >
                            <Image src='https://d16aymak0y9zsb.cloudfront.net/Sportsplus/product/1080x1080/02112024/IC1323_1_1730533477-424508129541.jpg' alt="Socks" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Socks</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} data-aos="fade-up" data-aos-delay="200" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tS9Eh-XVczXuf_JywXqdBH5xAww64HvwA&s" alt="Towels" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Towels</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} data-aos="fade-up" data-aos-delay="300" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://adornthetable.com/wp-content/uploads/2023/08/Variety-of-Napkins-2.jpg' alt="Napkins" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Napkins</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} data-aos="fade-up" data-aos-delay="400" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://img.drz.lazcdn.com/static/pk/p/241be28e261300781f8cddc08227a9bc.jpg_720x720q80.jpg' alt="Fitted Sheets" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Fitted Sheets</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} data-aos="fade-up" data-aos-delay="500" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTz65P03omVs-pa23A5Brg6YeZizk26LR0g&s' alt="Pillows" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Pillows</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} data-aos="fade-up" data-aos-delay="600" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaTKEgDcn1qpjKdZ-8XErvzcRDPnky0eDNQ&s' alt="Table Cloth" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Table Cloth</Title>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Categories