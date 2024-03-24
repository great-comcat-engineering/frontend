import React from "react";
import { Button } from "../ui/button";
import CoreIcons from "../core/core-icons";
import { navMenuItems } from "./nav-menu-items";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

const NavMobile: React.FC = () => {
    return (
        <div className="md:hidden flex fixed top-5 right-5">
            <Drawer direction="right">
                <DrawerTrigger asChild>
                    <Button variant="default" size="icon">
                        <CoreIcons.List size={24} />
                    </Button>
                </DrawerTrigger>

                <DrawerContent className="">
                    {navMenuItems.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{item.title}</p>
                            </div>
                        );
                    })}
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default NavMobile;
