import { Route, Routes } from "react-router-dom";
import Home from "../component/main/Home";
import About from "../component/main/About";
import Services from "../component/main/Services";
import Contact from "../component/main/Contact";
import Gallery from "../component/main/Gallery";
import Testimonials from "../component/main/Testimonials";

const Routess = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            

        </Routes>
    );
};

export default Routess;