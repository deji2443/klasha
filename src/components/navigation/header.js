import React from "react";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Image from "react-bootstrap/Image";

class Header extends React.Component {
  constructor() {
    super();
    let dateNow = new Date();
    let dayNow = dateNow.getDate();
    let daySuffix;
    switch (dayNow) {
      case 1:
      case 21:
      case 31:
        daySuffix = "st";
        break;
      case 2:
      case 22:
        daySuffix = "nd";
        break;
      case 3:
      case 23:
        daySuffix = "rd";
        break;
      default:
        daySuffix = "th";
        break;
    }
    var today = new Date(),
      month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][new Date().getDay()],
      date = dayNow + daySuffix + " " + month + " " + today.getFullYear();
    this.state = {
      date: date,
    };
  }

  render() {
    return (
      <div id="balance-up">
        <div className="row">
          <div className="col">
            <p className="h6 balance">Balances</p>
            <p className="balance-date">{this.state.date}</p>
          </div>
          <div className="col">
            <div className="notify">
              <NotificationsNoneOutlinedIcon className="notify-icons notify-logo" />
              <span className="dot"></span>
              <Image src="logos/image.png" className="top-logo" roundedCircle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
