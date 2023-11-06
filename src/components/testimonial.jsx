export default function Testimonial() {
  return (
    <div className="container-fluid bg-light my-5 p-0 py-5">
      <div className="container p-0 py-5">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-secondary mb-3">Testimonial</h4>
          <h1 className="display-4 m-0">
            Our Client <span className="text-primary">Says</span>
          </h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="bg-white mx-3 p-4">
            <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
              <img
                className="img-fluid"
                src="img/testimonial-1.jpg"
                style={{width: '80px', height: '80px'}}
                alt=""
              />
              <div className="ml-3">
                <h5>Client Name</h5>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
          <div className="bg-white mx-3 p-4">
            <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
              <img
                className="img-fluid"
                src="img/testimonial-2.jpg"
                style={{width: '80px', height: '80px'}}
                alt=""
              />
              <div className="ml-3">
                <h5>Client Name</h5>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
          <div className="bg-white mx-3 p-4">
            <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
              <img
                className="img-fluid"
                src="img/testimonial-3.jpg"
                style={{width: '80px', height: '80px'}}
                alt=""
              />
              <div className="ml-3">
                <h5>Client Name</h5>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
          <div className="bg-white mx-3 p-4">
            <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
              <img
                className="img-fluid"
                src="img/testimonial-4.jpg"
                style={{width: '80px', height: '80px'}}
                alt=""
              />
              <div className="ml-3">
                <h5>Client Name</h5>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
