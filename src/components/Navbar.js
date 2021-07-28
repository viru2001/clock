import Nav from 'react-bootstrap/Nav';
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {


    return (
        <Nav id="navbar" className="justify-content-center"  activeKey="/Digital Clock" >
            <Nav.Item>
                <Nav.Link as={Link} to="/clock" >Clock</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/stopwatch" eventKey="link-1" >Stopwatch</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/countdown" eventKey="link-2" >Countdown</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}