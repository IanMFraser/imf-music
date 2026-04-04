/**
 * Site-wide navigation bar.
 *
 * Renders the artist brand name (links to /music) and two nav links:
 * MUSIC (/music/albums) and CONTACT (/music/contact).
 * Collapses into a hamburger menu on small screens via Bootstrap's
 * responsive Navbar (expand="lg").
 */
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" collapseOnSelect className="my-4">
        <Container className="ms-10">
          <Navbar.Brand href="/music" className="my-2 fst-italic fw-bold">
            IAN M FRASER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="imf-navbar-nav" className="border-0" />
          <Navbar.Collapse id="imf-navbar-nav">
            <Nav as="ul" className="justify-content-start ms-2 flex-row">
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
