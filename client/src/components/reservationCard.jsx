import { Link, useNavigate } from "react-router-dom";
import * as reservationsService from "../services/reservationsService";
import { useState } from "react";

export default function ReservationCard({ roomName, periods, roomId }) {
    const navigate = useNavigate();
    const [usePeriods, setUsePeriods] = useState(periods);
    async function cancelReservation(roomId, period, roomName) {
        const datesToExclude = getDateFromPeriod(period).result;

        const existingReservations = await reservationsService.getOne(roomId);
        const reservations = Object.values(existingReservations);
        const selectedRoomReservations = reservations[0];

        const newReservationsData = excludeDatesFromReservations(
            selectedRoomReservations,
            datesToExclude
        );

        const hasConfimed = confirm(
            `Are you sure you want to delete this reservation "${roomName}" for this period: ${period}`
        );

        if (hasConfimed) {
            console.log("successfuly made reservation");
            await reservationsService.addNewReservation(roomId, roomName, {
                ...newReservationsData,
            });
            setUsePeriods(
                resetPeriodsAfterDelete(
                    getDateFromPeriod(period).periodArr,
                    usePeriods
                )
            );
            // setUsePeriods()
        }

        function getDateFromPeriod(period) {
            const periodArr = period.split(" - ");
            const [sDay, sMonth, sYear] = periodArr[0].split("/");
            const [eDay, eMonth, eYear] = periodArr[1].split("/");
            const startDateWithWrongHours = new Date(
                `${sYear}-${sMonth}-${sDay}`
            );
            const startDate = new Date(
                startDateWithWrongHours.setHours(0, 0, 0, 0)
            );
            const endDateWithWrongHours = new Date(
                `${eYear}-${eMonth}-${eDay}`
            );
            const endDate = new Date(
                endDateWithWrongHours.setHours(0, 0, 0, 0)
            );
            const periodInDays = 1;
            const result = generatePeriodicDates(
                startDate,
                endDate,
                periodInDays
            );

            function generatePeriodicDates(startDate, endDate, periodInDays) {
                const dates = [];
                let currentDate = new Date(startDate);

                while (currentDate <= endDate) {
                    dates.push(new Date(currentDate));
                    currentDate.setDate(currentDate.getDate() + periodInDays);
                }

                return dates;
            }
            return { result, periodArr };
        }
    }

    function excludeDatesFromReservations(
        allExistingDatesObj,
        datesToExcludeArr
    ) {
        let reservationsWithExcludedDates = { ...allExistingDatesObj };

        for (const dateToExclude of datesToExcludeArr) {
            const dateToExcludeString = dateToExclude.toString();

            if (
                reservationsWithExcludedDates.hasOwnProperty(
                    dateToExcludeString
                )
            ) {
                delete reservationsWithExcludedDates[dateToExcludeString];
            }
        }
        return reservationsWithExcludedDates;
    }

    function resetPeriodsAfterDelete(requestToDelete, oldPeriods) {
        const formatedRequestToDelete = requestToDelete.join(" - ");
        // console.log("comparing:", formatedRequestToDelete);
        // console.log("with:", oldPeriods);
        const result = oldPeriods.filter(
            (period) => period != formatedRequestToDelete
        );
        console.log("The result:", result);
        return result;
    }

    return (
        <div className="col-md-6 col-lg-4 mb-4">
            {usePeriods.length !== 0 && (
                <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                    <h3 className="mb-3">{roomName}</h3>

                    {usePeriods.map((period) => (
                        <div key={period} style={{ marginBottom: "50px" }}>
                            <p>Period:</p>
                            <p>{period}</p>
                            <Link
                                onClick={() =>
                                    cancelReservation(roomId, period, roomName)
                                }
                                className="text-uppercase font-weight-bold"
                            >
                                Cancel reservation
                            </Link>
                        </div>
                    ))}

                    {/* <a className="text-uppercase font-weight-bold" href="">
                    Cancel reservation
                </a> */}
                    {/* <a className="text-uppercase text-secondary font-weight-bold" href="">Edit reservation</a> */}
                </div>
            )}
        </div>
    );
}
