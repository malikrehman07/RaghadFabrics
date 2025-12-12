import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Typography, message } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/contact", values);
      message.success("Message sent successfully!");
    } catch (err) {
      console.error(err);
      message.error("Failed to send message");
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };
  // const handleSubmit = (values) => {
  //   setLoading(true);
  //   // Simulate form submission
  //   setTimeout(() => {
  //     message.success("Message sent successfully!");
  //     setLoading(false);
  //     form.resetFields();
  //   }, 2000);
  // }

  return (
    <main>
      <div className="container my-5 py-4">
        <Row gutter={[32, 32]}>
          {/* Left Side - Contact Info */}
          <Col xs={24} md={10}>
            <Title level={2}>Contact Us</Title>
            <Paragraph>
              We'd love to hear from you! Whether you have a question about our menu, orders, or anything else — our team is ready to answer all your questions.
            </Paragraph>
            <p><PhoneOutlined style={{ marginRight: 8 }} /> +92 304 866 6323</p>
            <p><MailOutlined style={{ marginRight: 8 }} />zaeemzia@raghadfabric.com</p>
            <p><EnvironmentOutlined style={{ marginRight: 8 }} /> P-1, street 1, Sheerianbad Nashatabad Faisalabad</p>
          </Col>

          {/* Right Side - Contact Form */}
          <Col xs={24} md={14}>
            <Form
              layout="vertical"
              form={form}
              onFinish={handleSubmit}
              size="large"
            >
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>

              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Invalid email address' }
                ]}
              >
                <Input placeholder="john@example.com" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter a message' }]}
              >
                <Input.TextArea placeholder="Type your message..." rows={4} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" variant='solid' color='default' htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default Contact;
