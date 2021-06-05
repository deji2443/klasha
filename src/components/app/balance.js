import React from "react";
import { Button } from "react-bootstrap";
import SearchField from "react-search-field";
import PriceSelect from "./priceSelect";
import DatePickers from './datepicker';

let balance = "$5,332.18";

class Balance extends React.Component {
  render() {
    return (
      <div id="">
        <div className="total-balance">
        <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight balance-child">
        <div className="row mb-2">
          <div className="col-sm d-flex">
            <p className="total-balance-text">Total account balance</p>
          </div>
          <div className="col-sm d-flex">
            <div className="notify d-flex">
              <PriceSelect />
              </div>
          </div>
        </div>

        </div>
      <div class="p-2 bd-highlight fund">
        <p className="fund-p"> Funds on hold</p> 
        <h2 className="font-weight-bold balance-value"> {balance} </h2>
        </div>
      </div>
        </div>
        <div className="row mb-2">
          <div className="payout">
            <p className="h6 balance">Payout table</p>
          </div>
          <div className="payout">
            <div className="notify flexer">
              <SearchField
                placeholder="Search something"
                // onChange={onChange}
                // searchText="This is initial search text"
                classNames="d-inline m-1"
              />
              <DatePickers classNames="d-inline" />
              <Button type="submit" className="mb-2 payout-btn">
                {" "}
                Payout
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Balance;
