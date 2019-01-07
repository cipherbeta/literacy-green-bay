import React from 'react';
import 'sanitize.css';
import 'bulma';
import '../static/styles/main.scss';
import Header from './header/';
import Footer from './footer/';
const Layout = props => (
    <>
        <Header/>
        {props.children}
        <Footer/>
    </>
)

export default Layout;