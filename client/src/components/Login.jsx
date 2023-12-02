

export default function Login() {
    return (
        <div className="container-fluid bg-light">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="bg-primary py-5 px-4 px-sm-5">
                        <form className="py-5">
                            <div className="form-group">
                                <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control border-0 p-4" placeholder="Your Password" required="required" />
                            </div>
                            <div>
                                <button className="btn btn-dark btn-block border-0 py-3 " type="submit">Login</button>
                                <div style={{color: "yellow", fontSize: "bold", textAlign: "center"}}>Password or email don't match.</div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">You don't have registration?</h4>
                    <button className="btn btn-dark border-0 py-3" type="submit">Register Now</button>
                </div>
            </div>
        </div>
    </div>
    );
}
