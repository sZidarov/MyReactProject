import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
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
import MyReservations from "./components/reservationsPage";
import CreateRoom from "./components/createRoom";
import EditRoom from "./components/editRoom";
import Logout from "./components/Logout";
import AuthGuard from "./guards/authGuard";
import AdminGuard from "./guards/adminGuard";
import AllReservations from "./components/allReservationsPage";
import ErrorBoundary from "./components/ErrorBounary";
import NotFound from "./components/404";

function App() {
    return (
        <>
            <ErrorBoundary>
                <AuthProvider>
                    <TopBar></TopBar>
                    <Navbar></Navbar>

                    <Routes fallback={<h1>Loading. . .</h1>}>
                        <Route path={Path.Home} element={<Home/>} />
                        <Route path={Path.Login} element={<Login/>} />
                        <Route path={Path.Register} element={<Register/>} />
                        <Route path={Path.About} element={<About/>} />
                        <Route path={Path.Rooms} element={<RoomsCatalog/>} />
                        <Route path={Path.Contacts} element={<Contacts/>} />
                        <Route path={Path.Details} element={<Details/>} />
                        <Route element={<AuthGuard/>}>
                            <Route path={Path.Booking} element={<Bookingform/>} />
                            <Route path={Path.Logout} element={<Logout />} />
                            <Route path={Path.MyReservations} element={<MyReservations/>}/>
                            <Route path={Path.AllReservations} element={<AllReservations/>}/>
                        </Route>
                        <Route element={<AdminGuard/>}>
                            <Route path={Path.CreateRoom} element={<CreateRoom/>} />
                            <Route path={Path.EditRoom} element={<EditRoom/>} />
                        </Route>
                        <Route path='*' element={<NotFound/>} />
                    </Routes>

                    <Footer> </Footer>
                </AuthProvider>
            </ErrorBoundary>
        </>
    );
}

export default App;
