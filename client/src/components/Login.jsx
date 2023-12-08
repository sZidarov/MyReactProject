import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import { Link } from "react-router-dom";
import Path from "../paths";

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            loginSubmitHandler(values);
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required!")
                .matches(/^\S+@\S+\.\S+$/, "Invalid email!"),
            password: Yup.string()
                .required("Password is required!")
                .min(5, "Password must be atlest 5 characters"),
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
                                        type="email"
                                        className="form-control border-0 p-4"
                                        placeholder="Your Email"
                                        required="required"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
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
                                    <input
                                        type="password"
                                        className="form-control border-0 p-4"
                                        placeholder="Your Password"
                                        required="required"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <div
                                        style={{
                                            color: "yellow",
                                            fontSize: "bold",
                                            textAlign: "center",
                                        }}
                                    >
                                        {formik.errors.password &&
                                            formik.touched.password &&
                                            formik.errors.password}
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-dark btn-block border-0 py-3 "
                                        type="submit"
                                        style={{ width: "330px" }}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                        <h4 className="text-secondary mb-3">
                            You don't have registration?
                        </h4>
                        <Link
                            className="btn btn-dark border-0 py-3"
                            type="submit"
                            to={Path.Register}
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
