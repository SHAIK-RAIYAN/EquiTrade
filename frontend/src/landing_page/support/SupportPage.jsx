import Footer from "../Footer";
import Navbar from "../Navbar";
import Categories from "./Categories";
import SupportSearch from "./SupportSearch";

function SupportPage() {
    return (<>
        <Navbar/>
        <SupportSearch />
        <Categories/>
        <Footer/>
    </>);
}

export default SupportPage;