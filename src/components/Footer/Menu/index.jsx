import React from 'react'
import { Col, Flex, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const { Title, Paragraph } = Typography
const Menu = () => {
    return (
        <div style={{backgroundColor:'#ededed'}} >
            <div className='container py-5'>
                <Row gutter={[18, 18]} >
                    <Col xs={12} sm={12} md={8} lg={8} >
                        <Title level={2} >Raghad Fabrics</Title>
                        <Paragraph style={{ fontSize: '17px' }} >Step into a world where every fabric is crafted to perfection.</Paragraph>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} >
                        <Title level={4} >Main Menu</Title>
                        <Link to='/' className="nav-link py-1" >Home</Link>
                        <Link to='/about' className="nav-link py-1" >About</Link>
                        <Link to='/contact' className="nav-link py-1" >Contact</Link>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} >
                        <Title level={4} >Contact Us</Title>
                        <Paragraph>contact@raghadfabrics.com</Paragraph>
                        <Paragraph>+64 958 248 966</Paragraph>
                        <Paragraph><Flex gap="middle" align="center">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={20} color="#1877F2" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={20} color="#1DA1F2" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={20} color="#E1306C" />
                            </a>
                        </Flex></Paragraph>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Menu
