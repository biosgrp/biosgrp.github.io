import { Clock } from "./pages/Clock";

export const ReactRoutes = {
    "/clock": { component: <Clock />, title: "Clock" }
};

export const RedirectRoutes = {
    "/how-it-works":
        "https://docs.google.com/document/d/1QGgCjgyL10sENRjS8uEywqrc7sY7Qs306ny_ZID4Ixw/edit?usp=sharing"
};
