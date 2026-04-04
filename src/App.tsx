/**
 * Root application component.
 *
 * Sets up BrowserRouter and defines the top-level route structure.
 * NavBar and Footer are persistent across all routes.
 *
 * Routes:
 * - /               → redirects to /music
 * - /music          → Home (current + archived news)
 * - /music/albums/* → Music (album grid + nested album detail)
 * - /music/contact  → Contact (bio + email)
 */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import Music from './components/Music'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Container fluid>
          <NavBar />
          <Routes>
            <Route path="/music/albums/*" element={<Music />} />
            <Route path="/music/contact" element={<Contact />} />
            <Route path="/music" element={<Home />} />
            <Route path="/" element={<Navigate to="/music" replace />} />
          </Routes>
          <Footer />
        </Container>
      </div>
    </Router>
  )
}
