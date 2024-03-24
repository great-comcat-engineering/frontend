"use client";

import React from "react";
import NavMobile from "./nav-mobile";
import NavDesktop from "./nav-desktop";

const NavMenu = () => {
    return (
        <>
            <NavMobile />
            <NavDesktop />
        </>
    );
};

export default NavMenu;
