export type NavMenuItem = {
    title: string;
    href: string;
    subItems?: {
        title: string;
        href: string;
    }[];
};

export const navMenuItems: NavMenuItem[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Categories",
        href: "/categories",
        subItems: [
            {
                title: "Category 1",
                href: "/category-1",
            },
            {
                title: "Category 2",
                href: "/category-2",
            },
            {
                title: "Category 3",
                href: "/category-3",
            },
        ],
    },
    {
        title: "My Account",
        href: "/account",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];
