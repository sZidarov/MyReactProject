import { Link } from "react-router-dom";
import Path from "../paths";
import AuthContext from "../contexts/authContext";
import { useContext } from "react";

export default function Home() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <div className="container-fluid p-0">
            <div
                id="header-carousel"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img
                            className="w-100"
                            src="img/carousel-2.jpg"
                            alt="Image"
                        />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px" }}>
                                <h1 className="display-3 text-white mb-3">
                                    We Keep Your Pet Happy
                                </h1>
                                <h2 className="text-white mb-3 d-none d-sm-block">
                                    while you are away
                                </h2>
                                {isAuthenticated === false ? (
                                    <Link
                                        to={Path.Login}
                                        className="btn btn-lg btn-primary mt-3 mt-md-4 px-4"
                                    >
                                        Login Now
                                    </Link>
                                ) : (
                                    <Link
                                        to={Path.Booking}
                                        className="btn btn-lg btn-primary mt-3 mt-md-4 px-4"
                                    >
                                        Book Now
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
