export default function ReservationCard({roomName, periods, onDelete}) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                {/* <img src="img/Room-1.jpg" alt="room-1" /> */}
                <h3 className="mb-3">{roomName}</h3>
                
                {periods.map(period=>(
                    <div key= {period} style={{marginBottom: "50px"}}>
                        <p>Period:</p>
                        <p>{period}</p>
                        <a className="text-uppercase font-weight-bold" href="">
                        Cancel reservation
                        </a>
                    </div>
                ))}
                {/* <a className="text-uppercase font-weight-bold" href="">
                    Cancel reservation
                </a> */}
                {/* <a className="text-uppercase text-secondary font-weight-bold" href="">Edit reservation</a> */}
            </div>
        </div>
    );
}
