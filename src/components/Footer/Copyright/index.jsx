import { Col, Row, Typography } from 'antd';
import React from 'react'

const Copyright = () => {
  const date = new Date().getFullYear();
  const { Paragraph } = Typography;
  return (
    <div className="container py-2 ">
      <Row>
        <Col span={24}>
          <Paragraph className="text-center mb-0">&copy;{date} Malik Rehman. All Rights Reserved.</Paragraph>
        </Col>
      </Row>
    </div>
  )
}

export default Copyright