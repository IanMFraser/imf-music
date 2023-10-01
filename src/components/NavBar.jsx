import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
    return (
        <>
            <Navbar expand="lg" collapseOnSelect className="my-4">
                <Container className="ml-10">
                    <Navbar.Brand
                        href="/music"
                        className="my-2 font-italic font-weight-bold"
                    >
                        IAN M FRASER
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="imf-navbar-nav"
                        className="border-0"
                    />
                    <Navbar.Collapse id="imf-navbar-nav">
                        <Nav
                            as="ul"
                            className="justify-content-start ml-2 flex-row"
                        >
                            <Nav.Item as="li" className="m-1">
                                <Nav.Link href="/music/albums" className="m-0">
                                    MUSIC
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="m-1">
                                <Nav.Link href="/music/contact" className="m-0">
                                    CONTACT
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
