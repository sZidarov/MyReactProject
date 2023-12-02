import { useFormik } from "formik";
import * as Yup from "yup"

export default function Register() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rePass: "",
        },
        onSubmit: (values) => {
            console.log("onSubmit", values);
        },

        validationSchema: Yup.object({
            email: Yup.string().required("Email is required!").matches(/^\S+@\S+\.\S+$/, "Invalid email"),
            password: Yup.string().required("Password is required!").min(6, "Password must be atlest 6 characters"),
            rePass: Yup.string().required("Repeat password!").oneOf([Yup.ref('password'), null], "Passwords don't match"),
        })
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
                                        name="email"
                                        type="email"
                                        className="form-control border-0 p-4"
                                        placeholder="Your Email"
                                        required="required"
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
                                    <div
                                        className="date"
                                        id="date"
                                        data-target-input="nearest"
                                    >
                                        <input
                                            name="password"
                                            type="password"
                                            className="form-control border-0 p-4"
                                            placeholder="Password"
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
                                </div>
                                <div className="form-group">
                                    <div
                                        className="date"
                                        id="date"
                                        data-target-input="nearest"
                                    >
                                        <input
                                            name="rePass"
                                            type="password"
                                            className="form-control border-0 p-4"
                                            placeholder="Repeat Password"
                                            value={formik.values.rePass}
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
                                            {formik.errors.rePass &&
                                                formik.touched.rePass &&
                                                formik.errors.rePass}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        className="btn btn-dark btn-block border-0 py-3"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                        <h4 className="text-secondary mb-3">
                            You already have registration?
                        </h4>
                        <button
                            className="btn btn-dark border-0 py-3"
                            type="submit"
                        >
                            Login Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
