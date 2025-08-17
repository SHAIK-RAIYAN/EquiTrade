import AccountTypes from "./AccountTypes";
import FAQ from "./FAQ";
import InvestmentOptions from "./InvestmentOptions";
import Signup from "./Signup";
import StepsOpenAccount from "./StepsOpenAccount";
import OpenAccount from './../OpenAccount';
import Navbar from "../Navbar";
import Footer from "../Footer";

function SignupPage() {
    return (<>
        <Navbar/>
        <Signup />
        <InvestmentOptions />
        <StepsOpenAccount />
        <AccountTypes/>
        <FAQ/>
        <OpenAccount/>
        <Footer/>
    </>);
}

export default SignupPage;