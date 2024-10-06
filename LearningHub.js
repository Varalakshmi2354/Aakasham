// LearningHub.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const LearningHub = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h2>Causes of Climate Change</h2>
          <p>Learn about the causes of climate change and its impacts on the environment.</p>
          <Link to="/learning-hub/causes">Read More</Link>
        </Col>
        <Col md={4}>
          <h2>Impacts of Climate Change</h2>
          <p>Discover the impacts of climate change on air and water quality, global warming, rising sea levels, and fires.</p>
          <Link to="/learning-hub/impacts">Read More</Link>
        </Col>
        <Col md={4}>
          <h2>Solutions to Climate Change</h2>
          <p>Explore the solutions to climate change and how you can make a difference.</p>
          <Link to="/learning-hub/solutions">Read More</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LearningHub;
// LearningHub.js
const mongoose = require('mongoose');

const learningHubSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const LearningHub = mongoose.model('LearningHub', learningHubSchema);

module.exports = LearningHub;