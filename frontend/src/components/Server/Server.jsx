import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import Classes from '../Pages/AboutUs.jsx';
import Membership from '../Pages/Membership.jsx';
import Trainer from '../Pages/Trainer.jsx';
import Contact from '../Pages/Contact.jsx';
import Silver from '../Pages/JsxInsideMembership/silvermembershipexplore.jsx'
import Silverbuy from '../Pages/JsxInsideMembership/silvermembershipbuy.jsx'
import Gold from '../Pages/JsxInsideMembership/goldmembershipexplore.jsx'
import Goldbuy from '../Pages/JsxInsideMembership/goldmembershipbuy.jsx'
import Dimond from '../Pages/JsxInsideMembership/dimondmembershipexplore.jsx'
import Dimondbuy from '../Pages/JsxInsideMembership/dimondmembershipbuy.jsx'
const Server = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home"element={<Home/>}/>
        <Route path="/classes"element={<Classes/>}/>
        <Route path="/trainer"element={<Trainer/>}/>
        <Route path="/membership"element={<Membership/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/silvermembershipexplore"element={<Silver/>}/>
        <Route path="/silvermembershipbuy"element={<Silverbuy/>}/>
        <Route path="/goldmembershipexplore"element={<Gold/>}/>
        <Route path="/goldmembershipbuy"element={<Goldbuy/>}/>
        <Route path="/dimondmembershipexplore"element={<Dimond/>}/>
        <Route path="/dimondmembershipbuy"element={<Dimondbuy/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default Server;
