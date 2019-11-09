import React from "react";
import "./Invest.css";

function Invest() {
  return (
    <div id="body">
      <div>
        Invest
        <div className="invest-inputs">
          <div>
            {'First name: '}
            <input placeholder="First name" className="input-boxes" />
          </div>
          <div>
            {'Last Name: '}
            <input placeholder="Last name" className="input-boxes" />
          </div>
          <div>
            {'Phone Number: '}
            <input placeholder="Phone" className="input-boxes" />
          </div>
          <div>
            {'Email: '}
            <input placeholder="email" className="input-boxes" />
          </div>
          <button className='submit'>Submit</button>
        </div>
      </div>
    </div>
  );
}
export default Invest;
