import React from "react";
import { Button } from "react-bootstrap";
import SearchField from "react-search-field";
// import DatePickers from "./datepicker";

class Balance extends React.Component {
  render() {
    return (
      <div id="">
        <div className="row mb-2">
          <div className="col">
            <p className="h6 balance">Payout table</p>
          </div>
          <div className="col">
            <div className="notify d-inline">
              <SearchField
                placeholder="Search something"
                // onChange={onChange}
                // searchText="This is initial search text"
                classNames="d-inline"
              />
              {/* <DatePickers classNames="d-inline" /> */}
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
