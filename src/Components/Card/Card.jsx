import image from "../../Assets/rectangle.png";
import ListItem from "../ListItem/ListItem";
import ticket from "../../Assets/Ticket.svg";
import CalendarBlank from "../../Assets/CalendarBlank.svg";
import Clock from "../../Assets/Clock.svg";
import "./style.css";

function Title() {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden ">
        <img className="w-full" src={image} alt="displayImage" />
        <div>
          <div className="card-title pt-3 text-lg">
            Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk
            House
          </div>
          <div className="py-6">
            <ListItem icon={ticket} title="Premium Class" />
            <ListItem icon={CalendarBlank} title="2nd October" />
            <ListItem icon={Clock} title="13:00 AM" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
