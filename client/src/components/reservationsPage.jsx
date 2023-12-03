export default function Reservations() {
    return (
        <div className="container-fluid bg-light pt-5">
            <div className="container py-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-secondary mb-3">Your Reservations</h4>
                    <h1 className="display-4 m-0"><span className="text-primary">View</span> Your Reservations</h1>
                </div>
                <div className="row pb-3">
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                            <img src="img/Room-1.jpg" alt="room-1" />
                            <h3 className="mb-3">Single Room</h3>
                            <p>period 05.12.2023 - 08.12.2023</p>
                            <a className="text-uppercase font-weight-bold" href="">Cancel reservation</a>
                            <a className="text-uppercase text-secondary font-weight-bold" href="">Edit reservation</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                            <img src="img/Room-2.jpg" alt="room-1" />
                            <h3 className="mb-3">Big rooom</h3>
                            <p>period 05.12.2023 - 08.12.2023</p>
                            <a className="text-uppercase font-weight-bold" href="">Cancel reservation</a>
                            <a className="text-uppercase text-secondary font-weight-bold" href="">Edit reservation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}