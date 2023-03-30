import Container from "react-bootstrap/Container";
import { propTypes } from "react-bootstrap/esm/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CollapsibleExample(props) {
  const location = useLocation();
  console.log(location.pathname);
  const handleLogout = () => {
    localStorage.removeItem("user-info");
    window.location = "/login";
  };
  const navigate = useNavigate();
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
      <Navbar.Brand
        style={{ marginLeft: 10, fontWeight: "bold" }}
        href={props.url ? "/" : "/login"}>
        Shopping Adventures
      </Navbar.Brand>
      <Container style={{ marginLeft: 20, width: "50%" }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {props.isLogin && (
              <Nav.Link
                as={Link}
                to="/"
                active={location.pathname === "/" && "true"}>
                DASHBOARD
              </Nav.Link>
            )}
            {/* <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#sale">SALE</Nav.Link> */}
            {/* <Nav.Link href="#newarrivals">NEW ARRIVALS</Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/products"
              active={location.pathname === "/products" && "true"}>
              SHOP
            </Nav.Link>
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

        <HeaderCartButton
          onClick={() => navigate("/cart", { replace: true })}
        />
        {!props.isLogin && (
          <Nav.Link as={Link} to="/login">
            {props.title}
          </Nav.Link>
        )}

        {props.isLogin && (
          <Dropdown style={{ marginLeft: 5 }}>
            <Dropdown.Toggle
              style={{
                backgroundColor: "#010e4d",
                borderRadius: 50,
                padding: "0.50rem 0.9rem",
                maxHeight: 30,
                maxWidth: 95
              }}>
              My Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Edit Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Nav>

      {/* </Container> */}
    </Navbar>
  );
}

export default CollapsibleExample;
