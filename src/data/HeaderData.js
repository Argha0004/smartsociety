import {
    Clapperboard,
    Trophy,
    TicketPercent,
    CalendarDays,
} from "lucide-react";

import { GrLocationPin } from "react-icons/gr";


export const topBarItems = [
    {
        text: "9TH JANUARY 2027",
        icon: CalendarDays,
    },
    {
        text: "BEST SHORT FILM · BEST DIRECTOR · BEST CINEMATOGRAPHY",
        icon: Trophy,
    },
    {
        text: "CONSORTIUM OF FILM & CONTENT CREATORS FESTIVAL",
        icon: Clapperboard,
    },
    {
        text: "KOLKATA, WEST BENGAL, INDIA",
        icon: GrLocationPin,
    },
];


export const navLinks = [
    {
        label: "HOME",
        path: "/",
    },
    {
        label: "ABOUT",
        path: "/about",
    },
    {
        label: "RULES",
        path: "/rules",
    },
    {
        label: "JURY",
        path: "/jury",
    },
    {
        label: "CONTACT US",
        path: "/contact-us",
    },
];


export const headerButtons = [
    {
        label: "JOIN FESTIVAL",
        path: "/register",
        type: "primary",
    },
    {
        label: "SIGN IN",
        path: "/signin",
        type: "outline",
    },
];