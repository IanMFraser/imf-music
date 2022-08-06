import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Home from './components/Home'
import Contact from './components/Contact'
import Music from './components/Music'
import News from './components/News'
import './App.css'

function App() {
    return (
        <Router basename="/">
            <div className="App">
                <NavBar />
                <Content>
                    <Switch>
                        <Route path="/music/news">
                            <News />
                        </Route>
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
                </Content>
            </div>
        </Router>
    )
}

export default App
