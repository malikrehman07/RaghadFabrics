import React from "react";
import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;


const About = () => {
  return (
    <main>

      <div className="container py-5">

        {/* Page Title */}
        <Title level={1} className="text-center mb-4">
          About Us
        </Title>

        {/* Intro Section */}
        <Paragraph className="text-center fs-5 mb-5">
          Raghad Fabrics is a trusted name in Pakistan’s textile industry, delivering
          high-quality fabrics to manufacturers, exporters, retailers, and leading apparel
          brands. With a strong commitment to excellence and innovation, we produce premium
          fabrics that meet both local and international standards.
        </Paragraph>

        {/* Vision & Mission */}
        <Row gutter={[30, 30]} className="my-5">
          <Col md={12}>
            <Card className="p-3 shadow-lg" style={{ height: '270px', backgroundColor: '#ededed' }} >
              <Title level={4}>Our Vision</Title>
              <Paragraph>
                To become a leading fabric manufacturer in Pakistan and a trusted supplier
                for global markets by delivering world-class textile products with consistent
                quality, innovation, and value.
              </Paragraph>
            </Card>
          </Col>

          <Col md={12}>
            <Card className="p-3 shadow-lg" style={{ height: '270px', backgroundColor: '#ededed' }} >
              <Title level={4}>Our Mission</Title>
              <Paragraph>
                • Manufacture fabrics that meet the highest textile standards. <br />
                • Build long-term client relationships through reliability and transparency. <br />
                • Use modern technology & sustainable production. <br />
                • Support Pakistan’s textile industry through craftsmanship and innovation.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Why Choose Us */}
        <Title level={3}>Why Choose Us?</Title>
        <ul>
          <li>Premium Quality Fabrics</li>
          <li>Experienced Textile Professionals</li>
          <li>Modern Machinery & Controlled Production</li>
          <li>Custom Manufacturing Options</li>
          <li>On-Time Delivery</li>
          <li>Competitive Pricing</li>
        </ul>

        {/* Final Section */}
        <Paragraph className="text-center mt-5 fs-5">
          Whether you are a garment manufacturer, exporter, brand, or retailer, Raghad Fabrics
          is ready to supply the fabric quality you need to bring your products to life.
          We look forward to partnering with you.
        </Paragraph>

      </div>
    </main>
  );
};

export default About;
