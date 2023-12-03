// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as roomsService from "../services/roomsService";
import RoomListItem from "./roomListItem";

export default function RoomsCatalog() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        roomsService
            .getAll()
            .then((result) => setRooms(result))
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(rooms);
    return (
        <div className="container-fluid bg-light pt-5">
            <div className="container py-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-secondary mb-3">Our Rooms</h4>
                    <h1 className="display-4 m-0">
                        <span className="text-primary">Premium</span> Dog Rooms
                    </h1>
                </div>
                {rooms.map((room) => (
                    <RoomListItem key={room._id} {...room} />
                ))}
                {rooms.length === 0 && <h3>No rooms added !</h3>}
                
            </div>
        </div>
    );
}
