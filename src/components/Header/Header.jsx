import Marquee from "../Marquee/Marquee";
import Title from "../Title/Title";
import DateLine from "../DateLine/DateLine";

export default function Header() {
  return (
    <div className="Header">
      <Marquee />
      <DateLine/>
      <Title />
    </div>
  );
}
