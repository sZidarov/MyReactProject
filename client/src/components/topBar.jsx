export default function TopBar (){
    return (
        <div className="container-fluid">
        <div className="row bg-secondary py-2 px-lg-5">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <a className="text-white pr-3" href="#">FAQs</a>
                    <span className="text-white">|</span>
                    <a className="text-white px-3" href="#">Help</a>
                    <span className="text-white">|</span>
                    <a className="text-white pl-3" href="#">Support</a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-white px-3" href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-white px-3" href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="row py-3 px-lg-5">
            <div className="col-lg-4">
                <a href="" className="navbar-brand d-none d-lg-block">
                    <h1 className="m-0 display-5 text-capitalize"><span className="text-primary">Pet</span>Lover</h1>
                </a>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="d-inline-flex flex-column text-center pr-3 border-right">
                        <h6>Opening Hours</h6>
                        <p className="m-0">8.00AM - 9.00PM</p>
                    </div>
                    <div className="d-inline-flex flex-column text-center px-3 border-right">
                        <h6>Email Us</h6>
                        <p className="m-0">pet_hotel@gmail.com</p>
                    </div>
                    <div className="d-inline-flex flex-column text-center pl-3">
                        <h6>Call Us</h6>
                        <p className="m-0">+359 888 5151 11</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}