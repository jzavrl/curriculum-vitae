export default function Skill({title, technologies}) {
  return (
    <>
      <div className="skill">{title}</div>
      <div className="detailed waypoint-reveal">{technologies.join(', ')}</div>
    </>
  )
}
