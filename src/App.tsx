import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
