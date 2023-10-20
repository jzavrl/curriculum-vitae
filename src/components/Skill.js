import WaypointBaffle from "./WaypointBaffle";

export default function Skill({title, technologies}) {
  return (
    <>
      <div className="skill">{title}</div>
      <WaypointBaffle>
        <div className="detailed">{technologies.join(', ')}</div>
      </WaypointBaffle>
    </>
  )
}
