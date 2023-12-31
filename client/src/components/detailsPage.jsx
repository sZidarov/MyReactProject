import styles from "./detailsPage.module.css";
import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as Yup from "yup";
import * as roomsService from "../services/roomsService";
import * as commentsService from "../services/commentsService";
import * as reservationsService from "../services/reservationsService";

import { pathToUrl } from "../utils/pathUtils";
import Path from "../paths";
import AuthContext from "../contexts/authContext";
import reducer from "./commentReducer";
import { useFormik } from "formik";

export default function Details() {
    const navigate = useNavigate(AuthContext);
    const { email, userId, isAuthenticated } = useContext(AuthContext);
    const [room, setRoom] = useState({});
    const [reservations, setReservations] = useState([]);

    const [comments, dispatch] = useReducer(reducer, []);

    const { roomId } = useParams();

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
    function getRoomId(roomData) {
        for (const key in roomData) {
            if (key == "_id") {
                return roomData[key];
            }
        }
    }

    useEffect(() => {
        roomsService
            .getOne(roomId)
            .then(setRoom)
            .catch((error) => {
                console.log(error);
                navigate('/404')
            });

        commentsService.getAll(roomId).then((result) => {
            dispatch({
                type: "GET_ALL_COMMENTS",
                payload: result,
            });
        });
    }, [roomId]);

    const addCommentHandler = async (values) => {
        try {
            const newComment = await commentsService.create(
                roomId,
                values.comment
            );

            newComment.owner = { email }; // This is in {} because the owner property is an object

            dispatch({
                type: "ADD_COMMENT",
                payload: newComment,
            });
        } catch (error) {
            alert(error.message);
        }
    };

    const deleteButtonClickHandler = async () => {
        const hasConfimed = confirm(
            `Are you sure you want to delete ${room.roomName}`
        );

        if (hasConfimed) {
            try {
                await roomsService.remove(roomId);

                reservations.map((res) => {
                    if (res.hasOwnProperty(room.roomName)) {
                        reservationsService.remove(res._id);
                    }
                });

                navigate("/rooms");
            } catch (error) {
                alert(error.message);
            }
        }
    };

    const formik = useFormik({
        initialValues: {
            comment: "",
        },
        onSubmit: (values) => {
            addCommentHandler(values);
        },
        validationSchema: Yup.object({
            comment: Yup.string().required("Comment is required!"),
        }),
    });

    return (
        <div className="container-fluid bg-light pt-5 pb-4">
            <div className={styles.containerDetails}>
                <h1 className={styles.h1}>Details for "{room.roomName}"</h1>
                <div className={styles.cardContainer}>
                    <img
                        className={styles.img}
                        src={room.imageUrl}
                        alt={room.roomName}
                    />
                    <div className={styles.p}>
                        <h3 className={styles.detailsh3}>{room.roomType}</h3>
                        <div className={styles.decription}>
                            <p>{room.description}</p>
                            <p className={styles.pricePar}>
                                Price per night: {room.price} euro
                            </p>

                            {/* Display if admin is logged */}
                            {email === "admin@abv.bg" && (
                                <div className={styles.buttonsDetails}>
                                    <Link
                                        className="btn btn-lg btn-secondary px-3 d-none d-lg-block"
                                        to={pathToUrl(Path.EditRoom, {
                                            roomId,
                                        })}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-lg btn-primary px-3 d-none d-lg-block"
                                        onClick={deleteButtonClickHandler}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <h2 className={styles.reviewsHeading}>User reviews:</h2>
            <div className={styles.containerComments}>
                <ul>
                    {comments.map(
                        (
                            { _id, text, owner: { email } } // this is what's called deep destructuring and it means destructurize owner to email
                        ) => (
                            <li key={_id} className={styles.comment}>
                                <p>
                                    <span className={styles.user}>
                                        {email}:
                                    </span>{" "}
                                    <span className={styles.userComment}>
                                        {text}
                                    </span>
                                </p>
                            </li>
                            // {/** Here the comman can have a delete button and we can omplement that functionality like game delete */}
                        )
                    )}

                    {comments.length === 0 && (
                        <p className={styles.noComment}>No reviews.</p>
                    )}

                    {/* <li className={styles.comment}>
                        <p>
                            <span className={styles.user}>
                                lilly@gmail.com:
                            </span>{" "}
                            <span className={styles.userComment}>Awesome!</span>
                        </p>
                    </li> */}
                </ul>
            </div>
            {isAuthenticated && (
                <div className={styles.createComment}>
                    <label>add new Review</label>
                    <form onSubmit={formik.handleSubmit}>
                        <textarea
                            name="comment"
                            placeholder="Comment . . ."
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        ></textarea>
                        <div
                            style={{
                                color: "yellow",
                                fontSize: "bold",
                                textAlign: "center",
                            }}
                        >
                            {formik.errors.comment &&
                                formik.touched.comment &&
                                formik.errors.comment}
                        </div>
                        <button
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                            className="btn btn-lg btn-secondary px-3 d-none d-lg-block border-dark"
                            type="submit"
                        >
                            Add Comment
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
