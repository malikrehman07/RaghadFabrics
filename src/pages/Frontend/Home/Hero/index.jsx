import { Button, Carousel, Col, Row, Typography } from 'antd'
import React from 'react'

const Hero = () => {
    const { Title, Paragraph } = Typography;
    const slides = [
        {
            title: "Raghad Fabrics",
            subtitle: "Premium Quality Fabrics for All Seasons",
            img: "https://res.cloudinary.com/djpvxvokp/image/upload/v1765202055/Hero_m73tw5.jpg"
        },
        {
            title: "Luxury & Comfort",
            subtitle: "Discover Our Exclusive Fabric Collection",
            img: "https://res.cloudinary.com/djpvxvokp/image/upload/v1765202015/Hero_2_gfe8g8.jpg"
        },
        {
            title: "Elegance in Every Thread",
            subtitle: "Shop the Latest Arrivals Today",
            img: "https://res.cloudinary.com/djpvxvokp/image/upload/v1765205879/Hero_3_c5e0va.webp"
        }
    ];
    return (
        // <section className='hero-section d-flex align-items-center justify-content-center text-center' >
        //     <div className="container hero-content ">
        //         <Row>
        //             <Col span={24} >
        //                 <Title level={1} style={{fontSize:'6rem', fontWeight:'700'}} className='text-white mb-2 ' >Raghad Fabrics</Title>
        //                 <Paragraph style={{fontSize:'1.4rem'}} className='text-white' >Premium Quality Fabrics for Every Occasion</Paragraph>
        //                 <Button type="primary" size="large">Shop Now</Button>
        //             </Col>
        //         </Row>
        //     </div>
        // </section>

        <Carousel autoplay effect="fade" className="hero-carousel">
            {slides.map((slide, index) => (
                <div key={index} >
                    <div
                        className="hero-slide d-flex align-items-center justify-content-center text-center"
                        style={{ backgroundImage: `url(${slide.img})` }}
                    >
                        <div className="hero-text container">
                            <Title level={1} style={{fontSize:'4.5rem', fontWeight:'700'}} className='text-white mb-2 ' >{slide.title}</Title>
                            <Paragraph style={{fontSize:'1.4rem'}} className='text-white' >{slide.subtitle}</Paragraph>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>

    )
}

export default Hero