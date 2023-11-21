import React from "react";

function Spinner() {
  return (
    <>
      <div className="position-absolute top-50 start-50">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Spinner;
