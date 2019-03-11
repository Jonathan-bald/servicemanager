import React, { Component } from "react";
import HeaderCard from '../../components/HeaderCard'
import Carousel from '../../components/Carousel'
import API from '../../utils/API'
import { Link } from "react-router-dom";
import { List, ListItem } from '../../components/List'
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from '../../components/DeleteBtn'
import Jumbotron from '../../components/Jumbotron'
import { Col, Row, Container } from "../../components/Grid";

class Cars extends Component {
    state = {
      cars: [],
      make: "",
      model: "",
      synopsis: ""
  };
  // When the component mounts, load all cars and save them to this.state.cars
  componentDidMount() {
    this.loadCars();
  }
  
  loadCars = () => {
    API.getCars()
    .then(res =>         
      this.setState({ cars: res.data, make: "", model: "", synopsis: "" })
    )
    .catch(err => console.log(err));
  };
  // Deletes a car from the database with a given id, then reloads cars from the db
  deleteCar = id => {
    API.deleteCar(id)
    .then(res => this.loadCars())
    .catch(err => console.log(err));
  };
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  // When the form is submitted, use the API.saveCar method to save the car data
  // Then reload cars from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.make && this.state.model) {
      API.saveCar({
        make: this.state.make,
        model: this.state.model,
        synopsis: this.state.synopsis
      })
      .then(res => this.loadCars())
      .catch(err => console.log(err));
    }
  }
  render() {
    return(
      <Container fluid>  
        <HeaderCard />
          <Carousel />
          <br>
          </br>
        <Row>
          <Col size="md-6">
          <Jumbotron>
            <h1>Add Vehicle Services</h1>
          </Jumbotron>
          <form>
              <Input
                value={this.state.make}
                onChange={this.handleInputChange}
                name="make"
                placeholder="Make"
              />
              <Input
                value={this.state.model}
                onChange={this.handleInputChange}
                name="model"
                placeholder="Model"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Service Information"
              />
              <FormBtn
                disabled={!(this.state.make && this.state.model)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
            </Col>
        <Col size="md-6">
          <Jumbotron>
            <h1>Vehicle List</h1>
          </Jumbotron>
          {this.state.cars.length ? (
              <List>
                {this.state.cars.map(car => (
                  <ListItem key={car._id}>
                    <Link to={"/cars/" + car._id}>
                      <strong>
                        {car.make} {car.model}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCar(car._id)} />
                  </ListItem>
               ))}
              </List>
            ) : (
              <h3>No Vehicles Listed</h3>
            )}
          </Col>        
        </Row>
    </Container>
    
  );
}
}

export default Cars;