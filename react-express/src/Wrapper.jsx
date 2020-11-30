import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home'

export default class Wrapper extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                </Router>
            </div>
        )
    }
}
