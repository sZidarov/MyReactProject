export default function Pricing() {
  return (
    <div className="container-fluid bg-light pt-5 pb-4">
      <div className="container py-5">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-secondary mb-3">Pricing Plan</h4>
          <h1 className="display-4 m-0">
            Choose the <span className="text-primary">Best Price</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card border-0">
              <div className="card-header position-relative border-0 p-0 mb-4">
                <img className="card-img-top" src="img/price-1.jpg" alt="" />
                <div
                  className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100"
                  style={{top: '0', left: '0', zIndex: '1', background: 'rgba(0, 0, 0, .5)',}}
                >
                  <h3 className="text-primary mb-3">Basic</h3>
                  <h1 className="display-4 text-white mb-0">
                    <small
                      className="align-top"
                      style={{fontSize: '22px', lineHeight: '45px',}}
                    >
                      $
                    </small>
                    49
                    <small
                      className="align-bottom"
                      style={{fontSize: '16px', lineHeight: "40px",}}
                    >
                      / Mo
                    </small>
                  </h1>
                </div>
              </div>
              <div className="card-body text-center p-0">
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item p-2">
                    <i className="fa fa-check text-secondary mr-2"></i>Feeding
                  </li>
                  <li className="list-group-item p-2">
                    <i className="fa fa-check text-secondary mr-2"></i>Boarding
                  </li>
                  <li className="list-group-item p-2">
                    <i className="fa fa-times text-danger mr-2"></i>Spa &
                    Grooming
                  </li>
                  <li className="list-group-item p-2">
                    <i className="fa fa-times text-danger mr-2"></i>Veterinary
                    Medicine
                  </li>
                </ul>
              </div>
              <div className="card-footer border-0 p-0">
                <a
                  href=""
                  className="btn btn-primary btn-block p-3"
                //   style="border-radius: 0;"
                >
                  Signup Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0">
              <div className="card-header position-relative border-0 p-0 mb-4">
                <img className="card-img-top" src="img/price-2.jpg" alt="" />
                <div
                  className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100"
                //   style="top: 0; left: 0; z-index: 1; background: rgba(0, 0, 0, .5);"
                >
                  <h3 className="text-secondary mb-3">Standard</h3>
                  <h1 className="display-4 text-white mb-0">
                    <small
                      className="align-top"
                    //   style="font-size: 22px; line-height: 45px;"
                    >
                      $
                    </small>
                    99
                    <small
                      className="align-bottom"
                    //   style="font-size: 16px; line-height: 40px;"
                    >
                      / Mo
                    </small>
                  </h1>
                </div>
              </div>
              <div className="card-body text-center p-0">
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item p-2">
                    <i className="fa fa-check text-secondary mr-2"></i>Feeding
                  </li>
                  <li className="list-group-item p-2">
                    <i className="fa fa-check text-secondary mr-2"></i>Boarding
                  </li>
                  <li className="list-group-item p-2">
                    <i className="fa fa-check text-secondary mr-2"></i>Spa &
                    Grooming
                  </li>
                  <li className="list-group-item p-2">
                    <i className="fa fa-times text-danger mr-2"></i>Veterinary
                    Medicine
                  </li>
                </ul>
              </div>
              <div className="card-footer border-0 p-0">
                <a
                  href=""
                  className="btn btn-secondary btn-block p-3"
                //   style="border-radius: 0;"
                >
                  Signup Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0">
              <div className="card-header position-relative border-0 p-0 mb-4">
                <img className="card-img-top" src="img/price-3.jpg" alt="" />
                <div
                  className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100"
                //   style="top: 0; left: 0; z-index: 1; background: rgba(0, 0, 0, .5);"
                >
                  <h3 className="text-primary mb-3">Premium</h3>
                  <h1 className="display-4 text-white mb-0">
                    <small
                      className="align-top"
                    //   style="font-size: 22px; line-height: 45px;"
                    >
                      $
                    </small>
                    149
                    <small
                      className="align-bottom"
                    //   style="font-size: 16px; line-height: 40px;"
                    >
                      / Mo
                    </small>
                  </h1>
                </div>
              </div>
              <div className="card-body text-center p-0">
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item p-2">
                    <i className="fa fa-check text-secondary mr-2"></i>Feeding
                  </li>
                  <li className="list-group-item p-2">
                    <i className="fa fa-check text-secondary mr-2"></i>Boarding
                  </li>
                  <li className="list-group-item p-2">
                    <i className="fa fa-check text-secondary mr-2"></i>Spa &
                    Grooming
                  </li>
                  <li className="list-group-item p-2">
                    <i className="fa fa-check text-secondary mr-2"></i>
                    Veterinary Medicine
                  </li>
                </ul>
              </div>
              <div className="card-footer border-0 p-0">
                <a
                  href=""
                  className="btn btn-primary btn-block p-3"
                //   style="border-radius: 0;"
                >
                  Signup Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
