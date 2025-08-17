import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftImgSection from "./LeftImgSection";
import RightImgSection from "./RightImgSection";
import Universe from "./Universe";

function ProductPage() {
    return (<>
    <Navbar/>
        <Hero />
        <LeftImgSection />
        <RightImgSection />
        <Universe/>
        <Footer/>
    </>);
}

export default ProductPage;