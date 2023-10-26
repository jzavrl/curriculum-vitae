import OvalGray from '../assets/images/oval-gray.svg';
import WaypointBaffle from "./WaypointBaffle";

export default function SectionTitle({ title, description }) {
  return (
    <div className="section-title">
      <h1 className="title">{title}</h1>
      <WaypointBaffle>
        <h2 className="bottom">{description}</h2>
      </WaypointBaffle>
      <img className="oval" src={OvalGray} />
    </div>
  )
}
