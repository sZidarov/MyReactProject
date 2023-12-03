import { Link, useNavigate, useParams } from "react-router-dom"; // I need that to get the id from URL
import Path from "../paths";

export default function Navbar() {
    return (
        <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <Link to={Path.Home} className="nav-item nav-link active">Home</Link>
                        <Link to={Path.About} className="nav-item nav-link">About</Link>
                        <Link to={Path.Rooms} className="nav-item nav-link">Rooms</Link>
                        <Link to={Path.Booking} className="nav-item nav-link">Booking</Link>
                        <Link to={Path.Contacts} className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="/rooms/create" className="btn btn-lg btn-secondary px-3 d-none d-lg-block">Create Room</Link>
                    <Link to={Path.Login} className="btn btn-lg btn-primary px-3 d-none d-lg-block" >Login</Link>
                    <Link to={Path.Register} className="btn btn-lg btn-secondary px-3 d-none d-lg-block">Register</Link>
                    <Link to={Path.Logout} className="btn btn-lg btn-primary px-3 d-none d-lg-block">Logout</Link>
                </div>
            </nav>
        </div>
    )
}