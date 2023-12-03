import styles from "./detailsPage.module.css";
export default function Details() {
    return (
        <div className="container-fluid bg-light pt-5 pb-4">
            <div className={styles.containerDetails}>
                <h1 className={styles.h1}>Details for "Some room"</h1>
                <div className={styles.cardContainer}>
                    <img className={styles.img} src="/img/Room-1.jpg" alt="" />
                    <div className={styles.p}>
                        <h3 className={styles.detailsh3}>Room type</h3>
                        <div className={styles.decription}>
                            <p>
                                Room decription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, corponsectetur adipisicing elit. Vitae, corporis iste illum acris iste illum accusantium iusto esse. Illum, incidunt optio consectetur officiis fugiat obcaecati soluta ea, amet tempora maxime, adipisci necessitatibus.
                            </p>
                            <p className={styles.pricePar}>
                                Price per night: 34 euro
                            </p>

                            {/* Display if admin is logged */}
                            <div className={styles.buttonsDetails}>
                                <a
                                    className="btn btn-lg btn-secondary px-3 d-none d-lg-block"
                                    href="#"
                                >
                                    Edit
                                </a>
                                <a
                                    className="btn btn-lg btn-primary px-3 d-none d-lg-block"
                                    href="#"
                                >
                                    Delete
                                </a>
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
