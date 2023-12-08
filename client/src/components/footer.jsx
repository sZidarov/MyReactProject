import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div
                className="container-fluid text-white py-4 px-sm-3 px-md-5"
                style={{ background: "#111111" }}
            >
                <div className="row">
                    <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white">
                            &copy;{" "}
                            <a className="text-white font-weight-bold" href="#">
                                Dog Hotel
                            </a>
                            . All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-right">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <Link className="nav-link text-white py-0">
                                    Privacy
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white py-0">
                                    Terms
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white py-0">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
