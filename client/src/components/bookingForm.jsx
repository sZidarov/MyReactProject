import { useState } from "react";
import {useFormik} from "formik";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import styles from './bookingForm.module.css'
import * as Yup from "yup";


export default function Bookingform() {
    const formik = useFormik({
        initialValues: {
            selectedDate: new Date(),
            selectedOption: "",
            email: '',
            name: '',
        },
        onSubmit: (values) => {
            console.log("Form data:", values);
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required!")
                .matches(/^\S+@\S+\.\S+$/, "Invalid email!"),
            name: Yup.string()
            .required("Name is required!")
        }),
    })
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="bg-primary py-5 px-4 px-sm-5">
                            <form className="py-5" onSubmit={formik.handleSubmit}>
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
                                    <input
                                        type="email"
                                        className="form-control border-0 p-4"
                                        placeholder="Your Email"
                                        required="required"
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    <div
                                        style={{
                                            color: "yellow",
                                            fontSize: "bold",
                                            textAlign: "center",
                                        }}
                                    >
                                        {formik.errors.email &&
                                            formik.touched.email &&
                                            formik.errors.email}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div
                                        className="date"
                                        id="date"
                                        data-target-input="nearest"
                                    >
                                        <DatePicker
                                            className={styles.customDatepicker}
                                            selected={formik.values.selectedDate}
                                            onChange={(date)=>formik.setFieldValue('selectedDate', date)}
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/* <div
                                        className="time"
                                        id="time"
                                        data-target-input="nearest"
                                    >
                                        <input
                                            type="time"
                                            className="form-control border-0 p-4 datetimepicker-input"
                                            placeholder="Reservation Time"
                                            data-target="#time"
                                            data-toggle="datetimepicker"
                                        />
                                    </div> */}
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
                                        {" "}
                                        {/*style="height: 47px;"*/}
                                        <option value="1">Room 1</option>
                                        <option value="2">Room 2</option>
                                        <option value="3">Room 3</option>
                                    </select>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-dark btn-block border-0 py-3"
                                        type="submit"
                                        style={{width: "330px"}}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
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
                    </div>
                </div>
            </div>
        </div>
    );
}
