import OvalGray from '../assets/images/layout/oval-gray.svg';
export default function SectionTitle({title, description}) {
  return (
    <div className="section-title">
      <h1 className="title">{title}</h1>
      <h2 className="bottom waypoint-reveal">{description}</h2>
      <img className="oval" src={OvalGray} />
    </div>
  )
}
