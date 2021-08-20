import React from 'react';
//react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import Home from './Home'
import Customers from './Customers'
import Transfers from './Transfers'
import Indiviual from './Indiviual'
import Footer from './Footer';
import TransferProcess from './TransferProcess'
//navbar
import Navbar from './Navbar'

function App(){
    return <Router >
        <Navbar />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/customers'>
                <Customers />
            </Route>
            <Route path='/transfers'>
                <Transfers />
            </Route>
            <Route path='/indiviual'>
                <Indiviual />
            </Route>
            <Route path='/transferProcess'>
                <TransferProcess />
            </Route>
        </Switch>
        <Footer />
    </Router>
}

export default App;