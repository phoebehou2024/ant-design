import React from 'react';
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';

const formatter = (value: number) => <CountUp end={value} separator="," />;

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={882900000} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={882900000} precision={2} formatter={formatter} />
    </Col>
  </Row>
);

export default App;
