import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./bookingForm.module.css";

import * as Yup from "yup";
import * as roomsService from "../services/roomsService";
import * as reservationsService from "../services/reservationsService"

import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import listDatesBetween from "../utils/listDatesBetween";
import checkForExistingReservation from "../utils/existingReservationCheck";

export default function Bookingform() {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [existingReservation, setIsExistingReservation] = useState({})
    const {email} = useContext(AuthContext);
    const today = new Date();
    today.setHours(0, 0, 0, 0)

    useEffect(() => {
        roomsService
            .getAll()
            .then((result) => setRooms(result))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        reservationsService.getAll()
            .then((result)=>{
                setReservations(Object.values(result))
            })
            .catch((err) => {
                console.log(err);
            });
    },[])


    const formik = useFormik({

        initialValues: {
            startDate: new Date(),
            endDate: null,
            selectedOption: "",
            // name: "",
        },
        onSubmit: async (values) => {
            try {
                const selectedRoomReservations = reservations.find((e)=>e.hasOwnProperty(values.selectedOption))
                const reservationData = {};
                
                const newReservationDatesArr = listDatesBetween(values.startDate.setHours(0, 0, 0, 0), values.endDate.setHours(0, 0, 0, 0))
                newReservationDatesArr.forEach(date=>reservationData[date] = email)
                if(selectedRoomReservations) {
                    const reservationsCheck = checkForExistingReservation(newReservationDatesArr, selectedRoomReservations)
                    if(reservationsCheck.isExisting){
                    return setIsExistingReservation({'isExisting': true, 'takenDates':reservationsCheck.matchingDates})
                }
                }
                
                
                setIsExistingReservation(()=>({'isExisting': false, 'takenDates':null}))

                const hasConfimed = confirm(
                    `Are you sure you want to make reservation on "${values.selectedOption}" for this period: ${values.startDate.toDateString()} - ${values.endDate.toDateString()}`
                );
        
                if (hasConfimed) {
                    console.log('successfuly made reservation');
                    if(selectedRoomReservations) { 
                        await reservationsService.addNewReservation(selectedRoomReservations._id, values.selectedOption ,{ ...selectedRoomReservations[values.selectedOption], ...reservationData})
                    } else {
                        const newReservation = await reservationsService.create(values.selectedOption)
                        await reservationsService.addNewReservation(newReservation._id, values.selectedOption ,{ ...reservationData})

                    }
                    navigate('/my-reservations')
                }
            } catch (error) {
                //Error notification
                console.log(error);
            }
        },
        validationSchema: Yup.object({
            startDate: Yup.date().required("Start Date is required").min(today, "Start date must be present or future"),
            endDate: Yup.date().required("End Date is required").min( Yup.ref('startDate'),
            "End date can't be before start date"
          )
        }),
    });

    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="bg-primary py-5 px-4 px-sm-5">
                            <form
                                className="py-5"
                                onSubmit={formik.handleSubmit}
                            >
                                
                                <div className="form-group">
                                    <span style={{color: "black"}}>from</span>
                                    <div
                                        className="date"
                                        id="date"
                                        data-target-input="nearest"
                                    >
                                        <DatePicker
                                            isClearable
                                            closeOnScroll={true}
                                            className={styles.customDatepicker}
                                            selected={
                                                formik.values.startDate
                                            }
                                            minDate={new Date()}
                                            onChange={(sdate) =>
                                                formik.setFieldValue(
                                                    "startDate",
                                                    sdate
                                                )
                                            }
                                            dateFormat="dd/MM/yyyy"
                                        />
                                        <div
                                            style={{
                                                color: "yellow",
                                                fontSize: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            {formik.errors.startDate &&
                                                formik.touched.startDate &&
                                                formik.errors.startDate}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span style={{color: "black"}}>to</span>
                                    <div
                                        className="date"
                                        id="date"
                                        data-target-input="nearest"
                                    >
                                        <DatePicker
                                            isClearable
                                            closeOnScroll={true}
                                            className={styles.customDatepicker}
                                            selected={
                                                formik.values.endDate
                                            }
                                            minDate={new Date()}
                                            onChange={(edate) =>
                                                formik.setFieldValue(
                                                    "endDate",
                                                    edate
                                                )
                                            }
                                            dateFormat="dd/MM/yyyy"
                                        />
                                        <div
                                            style={{
                                                color: "yellow",
                                                fontSize: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            {formik.errors.endDate &&
                                                formik.touched.endDate &&
                                                formik.errors.endDate}
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="form-group">
                                    <select
                                        className="custom-select border-0 px-4"
                                        style={{ height: "47px" }}
                                        name="selectedOption"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.selectedOption}
                                    >
                                        {rooms.map((room) => (
                                            <option
                                                key={room._id}
                                                value={rooms.roomName}
                                            >
                                                {room.roomName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-dark btn-block border-0 py-3"
                                        type="submit"
                                        style={{ width: "330px" }}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </form>
                            
                        </div>
                    </div>

                    {existingReservation.isExisting && (
                        <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                            <h3 className="mb-3">Sorry these dates are already taken:</h3>
                            {existingReservation.takenDates.map(date=> <p key={date.toString()}>{date.toDateString()}</p>)}
                        </div>
                    </div>
                    )}
                </div>
            </div>
                    
        </div>
    );
}
