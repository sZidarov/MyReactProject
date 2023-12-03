import { useFormik } from "formik";
import * as Yup from "yup";

import * as roomsService from "../services/roomsService"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditRoom () {
    const navigate = useNavigate();
    const { roomId } = useParams();
    const [room, setRoom] = useState(
        {
            roomName: "",
            roomType: "",
            description: "",
            imageUrl: "",
            price: "",
        },
        // {}
    );
    
    useEffect(() => {
            async function roomApi () {
                const data = await roomsService.getOne(roomId)
                setRoom(data)
            } 
            roomApi()
            // roomsService.getOne(roomId).then(async(result) => {
            // setRoom(await result);
            // });
    }, [roomId]);

    
    
    
    
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            roomName: room.roomName,
            roomType: room.roomType,
            imageUrl: room.imageUrl,
            description: room.description,
            price: room.price,
        },
        onSubmit: (values) => {
            try {
                roomsService.edit(roomId, values); // implement .edit() !!
                navigate("/rooms");
            } catch (error) {
                //Error notification
                console.log(error);
            }

            console.log("onSubmit", values);
        },

        validationSchema: Yup.object({
            roomName: Yup.string().required("Room name is required!").min(3, "Room name must be atlest 3 characters"),
            roomType: Yup.string().required("Room type is required!").min(3, "Room type must be atlest 3 characters"),
            imageUrl: Yup.string().required("Image is required"),
            description: Yup.string().required("descriptions is required").min(10, "Room type must be atlest 10 characters"),
            price: Yup.number().required("You must set a room price").min(0, "Price can't be negative number").max(300, "Price can't be over 300")
        })
    });

    return (
        <div className="container-fluid bg-light">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="bg-primary py-5 px-4 px-sm-5">
                        <h3 style={{textAlign: "center"}}>Edit Room</h3>
                        <form
                            className="py-5"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="form-group">
                                <input
                                    name="roomName"
                                    type="text"
                                    className="form-control border-0 p-4"
                                    placeholder="Room name"
                                    required="required"
                                    value={formik.values.roomName}
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
                                    {formik.errors.roomName &&
                                        formik.touched.roomName &&
                                        formik.errors.roomName}
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    name="roomType"
                                    type="text"
                                    className="form-control border-0 p-4"
                                    placeholder="Room type"
                                    required="required"
                                    value={formik.values.roomType}
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
                                    {formik.errors.roomType &&
                                        formik.touched.roomType &&
                                        formik.errors.roomType}
                                </div>
                            </div>
                            <div className="form-group">
                                <div
                                    data-target-input="nearest"
                                >
                                    <input
                                        name="imageUrl"
                                        type="text"
                                        className="form-control border-0 p-4"
                                        placeholder="Image Url"
                                        value={formik.values.imageUrl}
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
                                        {formik.errors.imageUrl &&
                                            formik.touched.imageUrl &&
                                            formik.errors.imageUrl}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div
                                    className="date"
                                >
                                    <textarea
                                        name="description"
                                        type="text"
                                        className="form-control border-0 "
                                        placeholder="description"
                                        style={{paddingLeft: "24px"}}
                                        value={formik.values.description}
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
                                        {formik.errors.description &&
                                            formik.touched.description &&
                                            formik.errors.description}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    name="price"
                                    type="number"
                                    className="form-control border-0 p-4"
                                    placeholder="price"
                                    required="required"
                                    value={formik.values.price}
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
                                    {formik.errors.price &&
                                        formik.touched.price &&
                                        formik.errors.price}
                                </div>
                            </div>

                            <div>
                                <button
                                    className="btn btn-dark btn-block border-0 py-3"
                                    type="submit"
                                    style={{width: "330px"}}
                                >
                                    Edit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">
                        Continue to improve. 
                    </h4>
                    <p>Current bookings count:</p>
                </div>
            </div>
        </div>
    </div>
    )
}