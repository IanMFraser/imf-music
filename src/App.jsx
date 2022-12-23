import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import Content from './components/Content'
import './App.css'
import routes from './routes/index'

function App() {
    return (
        <Router basename="/">
            <div className="App">
                <NavBar />
                <Content>
                    <Switch>
                        {routes.map(({ path, component }) => (
                            <Route path={path} component={component} key={path} />
                        ))}
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
