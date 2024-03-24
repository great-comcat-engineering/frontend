import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { NavListItem } from "./nav-menu-list-item";
import { navMenuItems } from "./nav-menu-items";

const NavDesktop: React.FC = () => {
    return (
        <NavigationMenu className="md:flex hidden container mx-auto">
            <NavigationMenuList>
                {navMenuItems.map((item, index) => {
                    if (item.subItems) {
                        return (
                            <NavigationMenuItem
                                key={index}
                                subItems={item.subItems}
                            >
                                <NavigationMenuTrigger>
                                    <NavigationMenuLink>
                                        {item.title}
                                    </NavigationMenuLink>
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <NavigationMenuList>
                                        {item.subItems.map(
                                            (subItem, subIndex) => (
                                                <NavListItem key={subIndex}>
                                                    <NavigationMenuLink>
                                                        {subItem.title}
                                                    </NavigationMenuLink>
                                                </NavListItem>
                                            )
                                        )}
                                    </NavigationMenuList>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    }

                    return (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger>
                                <NavigationMenuLink>
                                    {item.title}
                                </NavigationMenuLink>
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavDesktop;
