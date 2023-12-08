import { Link } from "react-router-dom";
import Path from "../paths";

export default function TopBar() {
    return (
        <div className="container-fluid">
            <div className="row py-3 px-lg-5">
                <div className="col-lg-4">
                    <Link to={Path.Home} className="navbar-brand d-none d-lg-block">
                        <h1 className="m-0 display-5 text-capitalize">
                            <span className="text-primary">Dog</span>Hotel
                        </h1>
                    </Link>
                </div>
                <div className="col-lg-8 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <div className="d-inline-flex flex-column text-center pr-3 border-right">
                            <h6>Opening Hours</h6>
                            <p className="m-0">8.00AM - 9.00PM</p>
                        </div>
                        <div className="d-inline-flex flex-column text-center px-3 border-right">
                            <h6>Email Us</h6>
                            <p className="m-0">dog_hotel@gmail.com</p>
                        </div>
                        <div className="d-inline-flex flex-column text-center pl-3">
                            <h6>Call Us</h6>
                            <p className="m-0">+359 888 5151 11</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
