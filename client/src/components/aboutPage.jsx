export default function About() {
    return (
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">About Us</h4>
                    <h1 className="display-4 mb-4"><span className="text-primary">We look after your Dog</span> & <span className="text-secondary">You travel</span></h1>
                    <h5 className="text-muted mb-3">If you are about to go somewhere without your dog we have a solution for you!</h5>
                    <p className="mb-4">Our team has expirience with dogs and everything one need to spend a few days with us. We care a lot for our guests and also provide: </p>
                    <ul className="list-inline">
                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Fully sanitazed and comfy rooms</h5></li>
                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>All day fun and games</h5></li>
                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Emergency Vet Services</h5></li>
                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>24/7 Care taking</h5></li>
                    </ul>
                    <a href="" className="btn btn-lg btn-primary mt-3 px-4">Learn More</a>
                </div>
                <div className="col-lg-5">
                    <div className="row px-3">
                        <div className="col-12 p-0">
                            <img className="img-fluid w-100" src="img/about-2.jpg" alt=""/>
                        </div>
                        <div className="col-6 p-0">
                            <img className="img-fluid w-100" src="img/happy-2.jpg" alt=""/>
                        </div>
                        <div className="col-6 p-0">
                            <img className="img-fluid w-100" src="img/about-1.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}