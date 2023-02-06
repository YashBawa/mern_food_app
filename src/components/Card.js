import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        {/* card details */}
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some Important Text</p>
            <div className="container w-100">
              {/* card created for each food item along with the number of quantities to be consumed  */}
              {/* arrow function is beign used to create an array of 6 quantities can be increased as well */}
              <select className="m-2 h-100 w-100 bg-success rounded">
                {/* creating an arrow function inside the jsx code  */}
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100  bg-success">
                <option value="half">Half</option>
                <option value="Full">Full</option>
              </select>
              {/* on default spectrum a new tag is never inline external styling has to be implemented to make it  */}
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
