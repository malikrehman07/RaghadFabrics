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
                    <Col xs={24} sm={12} md={12} lg={6} data-aos="fade-up" data-aos-delay="100" >
                        <Card hoverable className="rounded-5 shadow text-center" >
                            <Image src='https://enzahome.pk/cdn/shop/files/1_6e088db4-59ea-4039-a5b0-091afa7090b3.webp?v=1740996605&width=500' alt="Burger" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Home Fabrics</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} data-aos="fade-up" data-aos-delay="200" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91j9vw7DL5wni8Xt_Mr-R1dtiq6nIFiccnA&s" alt="Burger" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Printed Fabrics</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} data-aos="fade-up" data-aos-delay="300" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://www.balavignaorganic.com/images/products/satin-grey-fabric.jpg' alt="Burger" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Greige Fabrics</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} data-aos="fade-up" data-aos-delay="400" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://m.media-amazon.com/images/I/71+THBfholL._AC_SL1200_.jpg' alt="Burger" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Plain Fabrics</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} data-aos="fade-up" data-aos-delay="500" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylPGvGXUzF79V0YNwVTQ2zroPtCFjupedJQ&s' alt="Burger" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Embroidered Fabrics</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} data-aos="fade-up" data-aos-delay="600" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://ahmadfabricsinternational.com/cdn/shop/files/01-Light_Tabacco_008250c8-deae-4389-b2af-781bb517cdc9.jpg?v=1743944031' alt="Burger" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Cotton Fabrics</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} data-aos="fade-up" data-aos-delay="700" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vq9p31Hu3IYQRhqPrXemzi5SvCiDcz8I4w&s' alt="Burger" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Linen Fabrics</Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} data-aos="fade-up" data-aos-delay="800" >
                        <Card hoverable className="rounded-5 shadow text-center">
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyeS-VAl_f78sRSCluFDz3POqLwjFsIER0w&s' alt="Burger" width={160} height={160} preview={false} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                            <Title level={5} className="my-1">Silk Fabrics</Title>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Categories