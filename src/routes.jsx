import ServicePage from "./pages/ServiceDetails";
import PortfolioPage from "./pages/PortfolioDetails";
import ErrorPage from "./pages/error";
import Landing from "./pages/Landing";
import Sections from "./pages/Sections";

const routes = [
    {
        path : "/",
        element : <Landing page={<Sections/>}/>
    },
    {
        path : "/Service Details",
        element : <Landing page={<ServicePage/>}/>
    },
    {
        path : "/Portfolio Details",
        element : <Landing page={<PortfolioPage/>}/>
    },
    {
        path : "*",
        element : <ErrorPage/>
    }
];

export {routes};