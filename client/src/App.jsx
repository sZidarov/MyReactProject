import TopBar from "./components/topBar";
import Navbar from "./components/navBar";
import Home from "./components/homePage";
import Bookingform from "./components/bookingForm";
import About from "./components/aboutPage";
import Services from "./components/servicesPage";
import Features from "./components/featuresPage";
import Pricing from "./components/pricingPlan";
import Team from "./components/teamPage";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import Details from "./components/detailsPage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <>
            <TopBar></TopBar>
            <Navbar></Navbar>
            <Home></Home>
            {/* <Bookingform></Bookingform> */}
            <Login></Login>
            <Register></Register>
            <About></About>
            <Services></Services>
            <Details></Details>
            <Features></Features>
            {/* <Pricing></Pricing> */}
            <Team></Team>
            <Testimonial></Testimonial>
            <Footer> </Footer>
        </>
    );
}

export default App;
