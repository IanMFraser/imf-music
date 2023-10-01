import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
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
                    <Switch>
                        <Route path="/music/albums">
                            <Music />
                        </Route>
                        <Route path="/music/contact">
                            <Contact />
                        </Route>
                        <Route path="/music">
                            <Home />
                        </Route>
                        <Route path="/">
                            <Redirect to="/music" />
                        </Route>
                    </Switch>
                    <Footer />
                </Container>
            </div>
        </Router>
    )
}
