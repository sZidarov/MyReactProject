import { Route, Routes } from "react-router-dom";
import Path from "./paths";

import TopBar from "./components/topBar";
import Navbar from "./components/navBar";
import Home from "./components/homePage";
import Bookingform from "./components/bookingForm";
import About from "./components/aboutPage";
import RoomsCatalog from "./components/roomsCatalogPage";
import Contacts from "./components/contactsPage";
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
            <Routes fallback={<h1>Loading. . .</h1>}>
                <Route path={Path.Home} element={<Home/>} />
                <Route path={Path.Login} element={<Login/>} />
                <Route path={Path.Register} element={<Register/>} />
                <Route path={Path.About} element={<About/>} />
                <Route path={Path.Rooms} element={<RoomsCatalog/>} />
                <Route path={Path.Booking} element={<Bookingform/>} />
                <Route path={Path.Contacts} element={<Contacts/>} />
                <Route path={Path.Details} element={<Details/>} />

                {/* <Reservations></Reservations> */}
            </Routes>
            <Footer> </Footer>
        </>
    );
}

export default App;
