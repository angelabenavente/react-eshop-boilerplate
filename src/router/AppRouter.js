import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CheckOutPage } from '../components/ChekcoutPage.js';
import { Products } from '../components/Products.js';
import {Navbar} from '../components/Navbar.js';
import {Footer} from '../components/Footer.js';
import {UsePagination} from '../components/UsePagination.js';


export default function AppRouter() {

    return(
        <BrowserRouter>
            <div>
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<Products/>}/>
                    <Route exact path="/checkout-page" element={<CheckOutPage/>} />
                </Routes>
                <UsePagination/>
                <Footer/>
            </div>
        </BrowserRouter> 
    )
   
};


