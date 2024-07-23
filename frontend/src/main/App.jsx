import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../conponents/template/Logo'
import Nav from '../conponents/template/Nav'
import Footer from '../conponents/template/Footer'

export default props => 
    <HashRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />

    </div>
    </HashRouter>

const rootElement = document.getElementById('root');