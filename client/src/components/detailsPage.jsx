import styles from "./detailsPage.module.css";
import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; // I need that to get the id from URL

import * as roomsService from "../services/roomsService";

import { pathToUrl } from "../utils/pathUtils";
import Path from "../paths";



export default function Details() {
    // const navigate = useNavigate(AuthContext)
    // const { email, userId } = useContext(AuthContext);
    const [room, setRoom] = useState({});

    // const [comments, dispatch] = useReducer(reducer, []);
    
    const { roomId } = useParams();

    useEffect(() => {
        roomsService.getOne(roomId).then(setRoom);
        // Here it is good to have some validation if there is no such game and navigates to page 404 for instance

        // roomsService.getAll(roomId).then((result) => {
        //     dispatch({
        //         type: "GET_ALL_COMMENTS",
        //         payload: result,
        //     });
        // });
    }, [roomId]);

    
    const deleteButtonClickHandler = async() => {
        const hasConfimed = confirm(`Are you sure you want to delete ${room.roomName}`);

        if(hasConfimed) {
            await roomsService.remove(roomId)

            navigate('/rooms')
        }
    }



    return (
        <div className="container-fluid bg-light pt-5 pb-4">
            <div className={styles.containerDetails}>
                <h1 className={styles.h1}>Details for "{room.roomName}"</h1>
                <div className={styles.cardContainer}>
                    <img className={styles.img} src={room.imageUrl} alt={room.roomName} />
                    <div className={styles.p}>
                        <h3 className={styles.detailsh3}>{room.roomType}</h3>
                        <div className={styles.decription}>
                            <p>
                                {room.description}
                            </p>
                            <p className={styles.pricePar}>
                                Price per night: {room.price} euro
                            </p>

                            {/* Display if admin is logged */}
                            <div className={styles.buttonsDetails}>
                                <Link
                                    className="btn btn-lg btn-secondary px-3 d-none d-lg-block"
                                    to={pathToUrl(Path.EditRoom, {roomId})}
                                >
                                    Edit
                                </Link>
                                <Link
                                    className="btn btn-lg btn-primary px-3 d-none d-lg-block"
                                    to="#"
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerComments}>
                <ul>
                    <li className={styles.comment}>
                        
                        <p>
                            <span className={styles.user}>teddy@abv.bg:</span>{" "}
                            <span className={styles.userComment}>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Eaque, aliquid.!
                            </span>
                        </p>
                    </li>
                    <li className={styles.comment}>
                        <p>
                            <span className={styles.user}>
                                lilly@gmail.com:
                            </span>{" "}
                            <span className={styles.userComment}>Awesome!</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div className={styles.createComment}>
                <label>Add new comment</label>
                <form >
                    <textarea
                        name="comment"
                        placeholder="Comment . . ."
                    ></textarea>
                    <a
                        className="btn btn-lg btn-secondary px-3 d-none d-lg-block border-dark"
                        onClick={()=>console.log("submit")}
                    >
                        Add Comment
                    </a>
                </form>
            </div>
        </div>
    );
}
