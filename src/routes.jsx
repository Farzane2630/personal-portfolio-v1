import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";

let routes = [
   { path: "/", element: <About /> },
   { path: "/contact", element: <Contact /> },
   { path: "/portfolio", element: <Portfolio /> },
   { path: "/resume", element: <Resume /> },
];

export default routes;
