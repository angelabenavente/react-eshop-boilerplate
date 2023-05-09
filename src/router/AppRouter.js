import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CheckOutPage } from '../components/ChekcoutPage.js';
import { Products } from '../components/Products.js';
import {Navbar} from '../components/Navbar.js';
import {Footer} from '../components/Footer.js';
import {HomePage} from '../components/HomePage.js';
import { ContactPage } from "../components/ContactPage.js";


export default function AppRouter() {

    return(
        <BrowserRouter>
            <div>
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


