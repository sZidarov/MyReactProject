export default function Contacts() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img
                        className="img-fluid w-100"
                        src="img/The-Dog-Hotel.jpg"
                        alt="The-Dog-Hotel"
                    />
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">Where to find Us</h4>
                    <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1037.1739738275612!2d23.325123000596435!3d42.670449468009934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8546e7bbd691%3A0x6fc19ff6bc7f56f6!2sMivoli!5e0!3m2!1sbg!2sbg!4v1701536107271!5m2!1sbg!2sbg"
                                width="550"
                                height="250"
                                style={{ border: "1px solid"  }}
                                allowfullscreen=""
                                loading="lazy"
                                // referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    <h1 className="display-4 mb-4">
                        <span className="text-primary">Contact</span> Us
                    </h1>
                    <p className="mb-4">
                        The hotel is prividing care 24h for its guests. Reservations are made through the booking form. 
                        Accommodations are made within the openening hours. Please do not hasitate to ask anything. Phone ilne is opened within opening hours.
                    </p>
                    <div className="row py-2">
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-cat font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">
                                    Phone: <p>+359 888 5151 11</p>
                                </h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-doctor font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">
                                    Email: <p>dog_hotel@gmail.com</p>
                                </h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-care font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">
                                    Adress: <p>Weekender Group Pte Ltd </p>
                                            <p>45 Ubi Road 1 #04-01</p>
                                </h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-dog font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">
                                    Opened from: <p>8.00AM - 9.00PM</p> 
                                </h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
