import { Link } from "react-router-dom";
import * as reservationsService from "../services/reservationsService"


export default function ReservationCard({roomName, periods, roomId}) {
    
    async function cancelReservation (roomId, period){
        const dates = getDateFromPeriod(period);

        const existingReservations = await reservationsService.getOne(roomId)
        console.log(existingReservations);
        console.log(dates);


        function getDateFromPeriod(period){
            const periodArr = period.split(' - ');
            const [sDay, sMonth, sYear] = periodArr[0].split('/');
            const [eDay, eMonth, eYear] = periodArr[1].split('/');
            const startDate = new Date(`${sYear}-${sMonth}-${sDay}`)
            const endDate = new Date(`${eYear}-${eMonth}-${eDay}`)
            const periodInDays = 1
            console.log(periodArr);
            // console.log(startDate, endDate, periodInDays);
            const result = generatePeriodicDates(startDate, endDate, periodInDays);

            function generatePeriodicDates(startDate, endDate, periodInDays) {
                const dates = [];
                let currentDate = new Date(startDate);
              
                while (currentDate <= endDate) {
                  dates.push(new Date(currentDate));
                  currentDate.setDate(currentDate.getDate() + periodInDays);
                }
              
                return dates;
              }
            return result;
        }
    }

   


    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                {/* <img src="img/Room-1.jpg" alt="room-1" /> */}
                <h3 className="mb-3">{roomName}</h3>
                
                {periods.map(period=>(
                    <div key= {period} style={{marginBottom: "50px"}}>
                        <p>Period:</p>
                        <p>{period}</p>
                        <Link onClick={()=>cancelReservation(roomId, period)} className="text-uppercase font-weight-bold" >
                        Cancel reservation
                        </Link>
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
