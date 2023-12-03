import TopBar from "./components/topBar";
import Navbar from "./components/navBar";
import Home from "./components/homePage";
import Bookingform from "./components/bookingForm";
import About from "./components/aboutPage";
import RoomsCatalog from "./components/roomsCatalogPage";
import Contacts from "./components/contactsPage";
import Pricing from "./components/pricingPlan";
import Team from "./components/teamPage";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import Details from "./components/detailsPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Reservations from "./components/reservationsPage";

function App() {
    return (
        <>
            <TopBar></TopBar>
            <Navbar></Navbar>
            <Home></Home>
            <Bookingform></Bookingform>
            {/* <Login></Login> */}
            {/* <Register></Register> */}
            <About></About>
            <RoomsCatalog></RoomsCatalog>
            <Details></Details>
            <Reservations></Reservations>
            <Contacts></Contacts>
            <Footer> </Footer>
        </>
    );
}

export default App;
