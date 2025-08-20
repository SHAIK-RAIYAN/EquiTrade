import AccountTypes from "./AccountTypes";
import FAQ from "./FAQ";
import InvestmentOptions from "./InvestmentOptions";
import Signup from "./Signup";
import StepsOpenAccount from "./StepsOpenAccount";
import OpenAccount from './../OpenAccount';
import Benefits from "./Benefits";


function SignupPage() {
    return (<>
        <Signup />
        <InvestmentOptions />
        <StepsOpenAccount />
        <Benefits/>
        <AccountTypes/>
        <FAQ/>
        <OpenAccount/>
    </>);
}

export default SignupPage;