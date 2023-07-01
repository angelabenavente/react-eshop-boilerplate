import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CheckOutPage } from '../components/views/ChekcoutPage.js';
import { Products } from '../components/views/Products.js';
import {Navbar} from '../components/static/Navbar.js';
import {Footer} from '../components/static/Footer.js';
import {HomePage} from '../components/views/HomePage.js';
import { ContactPage } from "../components/views/ContactPage.js";
import {Sidebar} from '../components/sidebar/Sidebar.js';


export default function AppRouter() {

    return(
        <BrowserRouter>
            <div>
                <Header></Header>
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/products" element={<Products/>}/>
                    <Route exact path="/checkout-page" element={<CheckOutPage/>} />
                    <Route exact path="/contact-form" element={<ContactPage/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter> 
    )
   
};


