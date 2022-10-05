import PropTypes from "prop-types";

const PlaneCard = ({
  spotterName,
  dateSpotted,
  registration,
  airline,
  airport,
  destination,
  rate,
}) => {
  return (
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxs-plane" />{" "}
            </div>
            <div className="ms-2 c-details">
              <h6 className="mb-0 text-uppercase">{spotterName}</h6>{" "}
              <span>{dateSpotted}</span>
            </div>
          </div>
          <div className="badge">
            {" "}
            <span>{registration}</span>{" "}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="heading">
            {airline}
            <br />
            {airport}-{destination}
          </h3>
          <div className="mt-5">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${rate}%` }}
                aria-valuenow={rate}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="mt-3">
              {" "}
              <span className="text1">
                Rated <span className="text2">{rate}</span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneCard;

PlaneCard.propTypes = {
  spotterName: PropTypes.string.isRequired,
  dateSpotted: PropTypes.string.isRequired,
  registration: PropTypes.string.isRequired,
  airline: PropTypes.string.isRequired,
  airport: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

PlaneCard.defaultProps = {
  spotterName: "Chris Achinga",
  dateSpotted: "2021-08-01",
  registration: "A6-EVI",
  airline: "Emirates",
  airport: "DXB",
  destination: "Dubai",
  rate: 10,
};
