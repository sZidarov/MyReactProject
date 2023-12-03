export default function Contacts() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img
                        className="img-fluid w-100"
                        src="img/feature.jpg"
                        alt=""
                    />
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">Why Choose Us?</h4>
                    <h1 className="display-4 mb-4">
                        <span className="text-primary">Special Care</span> On
                        Pets
                    </h1>
                    <p className="mb-4">
                        Dolor lorem lorem ipsum sit et ipsum. Sadip sea amet
                        diam sed ut vero no sit. Et elitr stet sed sit sed kasd.
                        Erat duo eos et erat sed diam duo
                    </p>
                    <div className="row py-2">
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-cat font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">
                                    Best In Industry
                                </h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-doctor font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">
                                    Emergency Services
                                </h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-care font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">
                                    Special Care
                                </h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-dog font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">
                                    Customer Support
                                </h5>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1037.1739738275612!2d23.325123000596435!3d42.670449468009934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8546e7bbd691%3A0x6fc19ff6bc7f56f6!2sMivoli!5e0!3m2!1sbg!2sbg!4v1701536107271!5m2!1sbg!2sbg"
                                width="400"
                                height="250"
                                style={{ border: "1px solid"  }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
