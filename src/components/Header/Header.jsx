import Marquee from "../Marquee/Marquee";
import Title from "../Title/Title";
import DateLine from "../DateLine/DateLine";
import "./Header.css"

export default function header() {
  return (
    <div className="header">
      <Marquee />
      <DateLine/>
      <Title />
    </div>
  );
}
