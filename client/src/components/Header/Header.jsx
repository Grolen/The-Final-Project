import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './components/logoSvg'
import SearchBar from './components/searchBar'
import BagPopper from './components/bagPopper'
import FavoritePopper from './components/favoritePopper'
import LogInPopper from './components/logInPopper'

const Header = () => {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto text-uppercase">
                <Nav.Link href="/mens">мужчины</Nav.Link>
                <Nav.Link href="/womens">женщины</Nav.Link>
                <Nav.Link href="/childrens">дети</Nav.Link>
                <Nav.Link href="/brends">бренды</Nav.Link>
                <Nav.Link href="/news">новости</Nav.Link>
              </Nav>
              <SearchBar />
              <Nav className="me-auto space-between">
                <Nav.Link href="/">
                  <BagPopper />
                </Nav.Link>
                <Nav.Link href="/">
                  <FavoritePopper />
                </Nav.Link>
                <Nav.Link href="/">
                  <LogInPopper />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}
export default Header
