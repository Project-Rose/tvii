import { Router } from "express";
import vino from "./ui/vino.js"; // TVii itself
import tvtag from "./api/fakeTVTag.js"; // Fake TVTag route
import act from "./api/act.js" // Account
import data from "./api/data.js"; // API stuff

interface Route {
    name: string;
    path: string;
    route: Router;
};

const routes: Route[] = [
    {
        name: "Vino",
        path: "/",
        route: vino,
    },
    {
        name: "Fake TVTag",
        path: "/api/v1/tvtag",
        route: tvtag,
    },
    {
        name: "Act",
        path: "/api/v1/account",
        route: act,
    },
    {
        name: "Data",
        path: "/api/v1/data",
        route: data,
    },
];

export default routes;