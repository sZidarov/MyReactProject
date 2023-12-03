import { Link } from "react-router-dom";

export default function RoomListItem({
    _id,
    roomName,
    roomType,
    imageUrl,
    description,
}) {
    return (
        <>
        <div className="row pb-3">
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                    <img src={imageUrl} alt={roomName} />
                    <h3 className="mb-3">{roomName}</h3>
                    <p>
                        {description}
                    </p>
                    <Link className="text-uppercase font-weight-bold" to={`/rooms/${_id}`}>
                        Details
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}
