import React,{Component} from 'react';
import {
  Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container,Row,Col,Jumbotron} from 'reactstrap';
import './Recipe.css';
export default class Navb extends Component{
  constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
  render() {
          return (
              <div>
                <div class="mar">
                  <Navbar color="light" light fixed="top" class="mar">
                      <NavbarBrand href="/"><h4>Table Top</h4></NavbarBrand>
                      <NavbarToggler onClick={this.toggle} />
                      <Collapse isOpen={this.state.isOpen} navbar>
                          <Nav className="ml-auto" navbar>
                              <NavItem>
                                  <NavLink active href="/components/">Home</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink active href="#">Table</NavLink>
                              </NavItem>
                          </Nav>
                      </Collapse>
                  </Navbar>
                  </div>
                  <Jumbotron>
                      <Container>
                          <Row>
                              <Col>
                                  <h1>Welcome to Table Top</h1>
                              </Col>
                          </Row>
                      </Container>
                  </Jumbotron>
              </div>
          );
      }

    }
