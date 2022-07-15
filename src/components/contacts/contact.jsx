import { CURRENTLINE, CYAN, ORANGE, PURPLE,RED } from "../../helpers/colors";


const Contact = () => {
  return (
    <>
      <div className="col-md-6">
        <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-around">
              <div className="col-md-4 col-sm-4">
                <img
                  src="https://via.placeholder.com/200"
                  alt=""
                  style={{ border: `1px solid ${PURPLE}` }}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-7 col-sm-7">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-dark">
                    نام و نام خانوادگی:{" "}
                  </li>
                  <span className="fw-bold">آرش حسینی</span>

                  <li className="list-group-item list-group-item-dark">
                    شماره موبایل:{" "}
                  </li>
                  <span className="fw-bold">09389924550</span>

                  <li className="list-group-item list-group-item-dark">
                    آدرس ایمیل:{" "}
                  </li>
                  <span className="fw-bold">arashhosseini733@gmail.com</span>
                </ul>
              </div>
              <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                <button
                  className="btn my-1"
                  style={{ backgroundColor: ORANGE }}
                >
                  <li className="fa fa-eye" />
                </button>

                <button className="btn my-1" style={{ backgroundColor: CYAN }}>
                  <li className="fa fa-pen" />
                </button>

                <button className="btn my-1" style={{ backgroundColor: RED }}>
                  <li className="fa fa-trash" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
