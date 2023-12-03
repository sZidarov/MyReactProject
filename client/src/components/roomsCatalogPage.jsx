
import { Link, } from "react-router-dom"; 

export default function RoomsCatalog() {
    return (
        <div className="container-fluid bg-light pt-5">
            <div className="container py-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-secondary mb-3">Our Rooms</h4>
                    <h1 className="display-4 m-0"><span className="text-primary">Premium</span> Dog Rooms</h1>
                </div>
                <div className="row pb-3">
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                            <img src="/img/Room-1.jpg" alt="room-1" />
                            <h3 className="mb-3">Single Room</h3>
                            <p>Best for big breeds and dogs who are not good around other dogs</p>
                            <Link className="text-uppercase font-weight-bold" to="/">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                            <img src="/img/Room-2.jpg" alt="room-1" />
                            <h3 className="mb-3">Big rooom</h3>
                            <p>Best for comunicative dogs of all breeds and medium size. The most preferable choice.</p>
                            <a className="text-uppercase font-weight-bold" href="">Read More</a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

