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
    const [rooms, setRooms] = useState([]);
    const [reservations, setReservations] = useState([]);
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
                console.log("fetchresult",Object.values(result));
            })
            .catch((err) => {
                console.log(err);
            });
    },[])

    // const navigate = useNavigate();

    const formik = useFormik({

        initialValues: {
            startDate: new Date(),
            endDate: null,
            selectedOption: "",
            name: "",
        },
        onSubmit: async (values) => {
            try {

                const selectedRoomReservations = reservations.find((e)=>e.hasOwnProperty(values.selectedOption))
                const reservationData = {};
                console.log('selected..',selectedRoomReservations);
                
                // const oldReservations = Object.assign(selectedRoomReservations[values.selectedOption])

                const newReservationDatesArr = listDatesBetween(values.startDate.setHours(0, 0, 0, 0), values.endDate.setHours(0, 0, 0, 0))
                newReservationDatesArr.forEach(date=>reservationData[date] = email)
                // console.log("Final data", {...reservationData});

                checkForExistingReservation(newReservationDatesArr, selectedRoomReservations)

                await reservationsService.addNewReservation(selectedRoomReservations._id, values.selectedOption ,{ ...selectedRoomReservations[values.selectedOption], ...reservationData})
                console.log("From submit Form",reservationData);
                console.log('reservations', reservations);
                
                // navigate('/rooms')
                // console.log(values);
                // console.log(email);
            } catch (error) {
                //Error notification
                console.log(error);
            }
        },

        validationSchema: Yup.object({
            name: Yup.string().required("Name is required!"),
            startDate: Yup.date().required("Start Date is required").min(today, "Start date must be present or future"),
            endDate: Yup.date().required("End Date is required").min( Yup.ref('startDate'),
            "Еnd date can't be before start date"
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
                                    <input
                                        type="text"
                                        className="form-control border-0 p-4"
                                        placeholder="Your name"
                                        required="required"
                                        name="name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                    <div
                                        style={{
                                            color: "yellow",
                                            fontSize: "bold",
                                            textAlign: "center",
                                        }}
                                    >
                                        {formik.errors.name &&
                                            formik.touched.name &&
                                            formik.errors.name}
                                    </div>
                                </div>
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
                    {/* <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                        <h4 className="text-secondary mb-3">
                            Going for a vacation?
                        </h4>
                        <h1 className="display-4 mb-4">
                            Book For{" "}
                            <span className="text-primary">Your Pet</span>
                        </h1>
                        <p>
                            Labore vero lorem eos sed aliquy ipsum aliquy sed.
                            Vero dolore dolore takima ipsum lorem rebum
                        </p>
                        <div className="row py-2">
                            <div className="col-sm-6">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-2">
                                        <h1 className="flaticon-house font-weight-normal text-secondary m-0 mr-3"></h1>
                                        <h5 className="text-truncate m-0">
                                            Pet Boarding
                                        </h5>
                                    </div>
                                    <p>
                                        Diam amet eos at no eos sit lorem, amet
                                        rebum ipsum clita stet
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-2">
                                        <h1 className="flaticon-food font-weight-normal text-secondary m-0 mr-3"></h1>
                                        <h5 className="text-truncate m-0">
                                            Pet Feeding
                                        </h5>
                                    </div>
                                    <p>
                                        Diam amet eos at no eos sit lorem, amet
                                        rebum ipsum clita stet
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-2">
                                        <h1 className="flaticon-grooming font-weight-normal text-secondary m-0 mr-3"></h1>
                                        <h5 className="text-truncate m-0">
                                            Pet Grooming
                                        </h5>
                                    </div>
                                    <p className="m-0">
                                        Diam amet eos at no eos sit lorem, amet
                                        rebum ipsum clita stet
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-2">
                                        <h1 className="flaticon-toy font-weight-normal text-secondary m-0 mr-3"></h1>
                                        <h5 className="text-truncate m-0">
                                            Pet Tranning
                                        </h5>
                                    </div>
                                    <p className="m-0">
                                        Diam amet eos at no eos sit lorem, amet
                                        rebum ipsum clita stet
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
