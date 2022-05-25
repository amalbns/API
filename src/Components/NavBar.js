import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
return (
    <header>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">WS-API</Navbar.Brand>
    <Nav className="mx-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/Users">Users</Nav.Link>    
    <Nav.Link href="/Admin">Admin</Nav.Link>

    
    </Nav>
    </Container>
    </Navbar>
    

    </header>
)
}

export default NavBar