import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

class Detail extends Component {
  state = {
    car: {}
  };
  // When this component mounts, grab the car with the _id of this.props.match.params.id
  // e.g. localhost:3000/cars/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getCar(this.props.match.params.id)
      .then(res => this.setState({ car: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.car.make} {this.state.car.model}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <Card>
              <CardBody>
                <CardTitle>{this.state.car.make} {this.state.car.model}</CardTitle>
                <CardSubtitle>Work Done</CardSubtitle>
                <CardText>{this.state.car.synopsis}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;