import Container from "react-bootstrap/Container";
import { propTypes } from "react-bootstrap/esm/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";

function CollapsibleExample(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <div>
        <img
          src={require("../../components/assets/shopping.png")}
          width="50"
          height="50"
          alt="logo"
        />
      </div>
      <Navbar.Brand style={{ marginLeft: 10, fontWeight: "bold" }} href="#home">
      Click 2 Cart
      </Navbar.Brand>
      <Container style={{ marginLeft: 20 }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#sale">SALE</Nav.Link> */}
            {/* <Nav.Link href="#newarrivals">NEW ARRIVALS</Nav.Link> */}
            <Nav.Link as={Link} to="/men">
              MEN
            </Nav.Link>
            <Nav.Link as={Link} to="/women">
              WOMEN
            </Nav.Link>
            <Nav.Link as={Link} to="/kids">
              KIDS
            </Nav.Link>

            {/* <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>

        {/* <Container style={{ flex: 1, border: "2px solid", }}> */}
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

        {/* </Container> */}
      </Container>

      <Nav>
        {/* <Nav.Link as={Link} to="/cart">
          MY CART
        </Nav.Link> */}
        <HeaderCartButton />
        <Nav.Link as={Link} to="/login">
          {props.title}
        </Nav.Link>
      </Nav>

      {/* </Container> */}
    </Navbar>
  );
}

export default CollapsibleExample;
