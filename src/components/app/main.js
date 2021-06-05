import React from "react";
import Header from "../navigation/header";
import Sidebar from "../navigation/sidebar";
import KlashaTable from "./table";
import Balance from "./balance";
import PersistentDrawerLeft from "./drawer";

class Main extends React.Component {
  render() {
    return (
      <div>
        <PersistentDrawerLeft />
        <div className="row">
          <div className="col-sm-2">
            <Sidebar />
          </div>
          <div className="col-sm">
            <Header />
            <Balance />
            <KlashaTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
