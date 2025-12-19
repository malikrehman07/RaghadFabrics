import React, { useEffect } from "react";
import { Typography, Row, Col, Card } from "antd";
import Aos from "aos";

const { Title, Paragraph } = Typography;

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      <div className="container py-5">

        {/* Page Title */}
        <Title
          level={1}
          className="text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          About Raghad Fabrics
        </Title>

        {/* Company Overview */}
        <Paragraph
          className="text-center fs-5 mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Raghad Fabrics is a Pakistan-based textile manufacturing company
          specializing in the production and supply of high-quality woven and
          finished fabrics. We work with garment manufacturers, fashion brands,
          exporters, and bulk buyers who require consistency, scalability, and
          dependable supply.
          <br /><br />
          Our operations are structured to support both standard and customized
          fabric requirements, ensuring reliable production outcomes for
          commercial and industrial use.
        </Paragraph>

        {/* Business Focus */}
        <Row gutter={[30, 30]} className="my-5">
          <Col md={12} data-aos="fade-up" data-aos-delay="100">
            <Card className="p-4 shadow-lg" style={{ backgroundColor: "#ededed" }}>
              <Title level={4}>What We Manufacture</Title>
              <Paragraph style={{ height: '150px' }} >
                We manufacture a wide range of fabrics suitable for apparel and
                home textile applications, including:
                <ul>
                  <li>Socks</li>
                  <li>Towels</li>
                  <li>Napkins</li>
                  <li>Fitted Sheets</li>
                  <li>Pillows</li>
                  <li>Table Cloth</li>
                </ul>
              </Paragraph>
            </Card>
          </Col>

          <Col md={12} data-aos="fade-up" data-aos-delay="200">
            <Card className="p-4 shadow-lg" style={{ backgroundColor: "#ededed" }}>
              <Title level={4}>Industries We Serve</Title>
              <Paragraph style={{ height: '150px' }} >
                Our fabrics are supplied to businesses operating across multiple
                sectors:
                <ul>
                  <li>Apparel and fashion brands</li>
                  <li>Garment manufacturing units</li>
                  <li>Home textile producers</li>
                  <li>Textile exporters and wholesalers</li>
                  <li>Private-label and OEM clients</li>
                </ul>
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Quality & Operations */}
        <Row gutter={[30, 30]} className="my-4">
          <Col md={12} data-aos="fade-up" data-aos-delay="100">
            <Card className="p-4 shadow-lg" style={{ backgroundColor: "#ededed" }}>
              <Title level={4}>Quality Assurance</Title>
              <Paragraph style={{ height: '150px' }} >
                Quality control is integrated into every stage of our production
                process. From yarn selection to weaving, dyeing, and finishing,
                each batch is monitored to ensure consistency in texture, color,
                strength, and finish.Our internal quality checks help reduce defects and ensure that
                fabrics meet client specifications and industry standards.
              </Paragraph>
            </Card>
          </Col>

          <Col md={12} data-aos="fade-up" data-aos-delay="200">
            <Card className="p-4 shadow-lg" style={{ backgroundColor: "#ededed" }}>
              <Title level={4}>Production Capacity</Title>
              <Paragraph style={{ height: '150px' }} >
                We operate with scalable production capabilities designed to
                handle both small-batch and bulk orders. Our structured workflow
                allows us to maintain consistent lead times while meeting volume
                requirements.Businesses rely on Raghad Fabrics for stable supply, repeatable
                quality, and dependable delivery schedules.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Business Values */}
        <Title level={3} data-aos="fade-up" data-aos-delay="200">
          Our Business Approach
        </Title>

        <Paragraph data-aos="fade-up" data-aos-delay="100">
          We believe successful partnerships are built on transparency, technical
          understanding, and long-term commitment. Our team works closely with
          clients to understand fabric specifications, usage requirements, and
          delivery timelines.
        </Paragraph>

        <ul>
          <li data-aos="fade-up" data-aos-delay="150">
            Clear communication and requirement alignment
          </li>
          <li data-aos="fade-up" data-aos-delay="250">
            Consistent product specifications across repeat orders
          </li>
          <li data-aos="fade-up" data-aos-delay="350">
            Flexible customization options
          </li>
          <li data-aos="fade-up" data-aos-delay="450">
            Ethical and responsible manufacturing practices
          </li>
        </ul>

        {/* Closing */}
        <Paragraph
          className="text-center mt-5 fs-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Raghad Fabrics aims to be more than a supplier — we strive to be a
          dependable manufacturing partner for businesses seeking quality,
          consistency, and long-term value in textile sourcing.
        </Paragraph>

      </div>
    </main>
  );
};

export default About;
