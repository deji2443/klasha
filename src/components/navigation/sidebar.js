import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/styles.css";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import Image from "react-bootstrap/Image";

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/">
            {" "}
            <Image src="logos/logo.png" className="sidebar-logo" fluid />
          </Nav.Link>{" "}
          <h6 className="hero-text pt-3 pl-1">Main Pages</h6>
          <Nav.Link href="/home">
            <DashboardOutlinedIcon className="sidebar-icons" />
            Dashboard
          </Nav.Link>
          <Nav.Link eventKey="link-1">
            <AccountBalanceWalletOutlinedIcon className="sidebar-icons" />
            Balances
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <PeopleAltOutlinedIcon className="sidebar-icons" />
            Customers
          </Nav.Link>
          <Nav.Link eventKey="link-3">
            <ShowChartOutlinedIcon className="sidebar-icons" />
            Analytics
          </Nav.Link>
          <h6 className="hero-text pt-3 pl-1">General</h6>
          <Nav.Link eventKey="link-4">
            <TuneOutlinedIcon className="sidebar-icons" />
            Settings
          </Nav.Link>
          <Nav.Link eventKey="link-5">
            <StarBorderOutlinedIcon className="sidebar-icons" />
            Team
          </Nav.Link>
          <Nav.Link eventKey="link-6">
            <CallOutlinedIcon className="sidebar-icons" /> Contact
          </Nav.Link>
          <Nav.Link eventKey="link-7">
            <ExitToAppOutlinedIcon className="sidebar-icons" /> Log Out
          </Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
