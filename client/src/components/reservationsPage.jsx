import AuthContext from "../contexts/authContext";
import * as reservationsService from "../services/reservationsService";
import { useContext, useEffect, useState } from "react";
import ReservationCard from "./reservationCard";

export default function MyReservations() {
    const { email } = useContext(AuthContext);
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        reservationsService
            .getAll()
            .then((result) => {
                setReservations(Object.values(result));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    function getRoomName(roomData) {
        for (const key in roomData) {
            if (key != "_id") {
                return key;
            }
        }
    }

    function getRoomId(roomData) {
        for (const key in roomData) {
            if (key == "_id") {
                return roomData[key];
            }
        }
    }

    function getRoomDates(roomData) {
        const roomName = getRoomName(roomData);
        for (const key in roomData) {
            if (key == roomName) {
                return roomData[key];
            }
        }
    }

    function getMyDates(allDates) {
        const myDates = [];
        for (const date in allDates) {
            if (allDates[date] == email) {
                myDates.push(date);
            }
        }
        return myDates;
    }

    function makeDatesToPeriods(room) {
        const roomDates = getRoomDates(room);
        const myDates = getMyDates(roomDates);
        // console.log(myDates);

        const sortedDates = myDates.sort((a, b) => {
            a - b;
        });
        const sortedAndMappedToDates = sortedDates.map(
            (date) => new Date(date)
        );
        // Separate the array into serial periods
        const separateIntoSerialPeriods = (array) => {
            const serialPeriods = [];
            let currentPeriod = [array[0]];

            for (let i = 1; i < array.length; i++) {
                const currentDate = array[i];
                const prevDate = array[i - 1];

                // Check if the current date is one day after the previous date
                const isSerial = currentDate - prevDate === 24 * 60 * 60 * 1000;

                if (isSerial) {
                    // Dates are serial, add to the current period
                    currentPeriod.push(currentDate);
                } else {
                    // Dates are not serial, start a new period
                    serialPeriods.push(currentPeriod);
                    currentPeriod = [currentDate];
                }
            }

            // Add the last period to the result
            serialPeriods.push(currentPeriod);

            return serialPeriods;
        };

        const result = separateIntoSerialPeriods(sortedAndMappedToDates);

        const resultString = result.map(
            (period) =>
                `${new Date(period[0]).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })} - ${new Date(period[period.length - 1]).toLocaleDateString(
                    "fr-FR",
                    {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    }
                )}`
        );
        return resultString;
    }

    return (
        <div className="container-fluid bg-light pt-5">
            <div className="container py-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h1 className="display-4 m-0">
                        <span className="text-primary">View</span> Your
                        Reservations
                    </h1>
                </div>
                <div className="row pb-3">
                    {reservations.map((res) => {
                        if(makeDatesToPeriods(res)[0] !== 'Invalid Date - Invalid Date'){
                            return(
                                    <ReservationCard
                                    key={getRoomId(res)}
                                    roomId={getRoomId(res)}
                                    roomName={getRoomName(res)}
                                    periods={makeDatesToPeriods(res)}
                                    />
                                )
                        }
                        })}

                    {/* <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                            <h3 className="mb-3">Big rooom</h3>
                            <p>period 05.12.2023 - 08.12.2023</p>
                            <a className="text-uppercase font-weight-bold" href="">Cancel reservation</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
