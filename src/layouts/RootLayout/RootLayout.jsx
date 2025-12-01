import React from 'react';
import {Outlet} from "react-router";
import Footer from "../../pages/Shared/Footer/Footer.jsx";
import Navbar from "../../pages/Shared/Navbar/Navbar.jsx";

const RootLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default RootLayout;