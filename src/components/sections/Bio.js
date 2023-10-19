import ProfileImage from "../../assets/images/layout/profile.png";
import SectionTitle from "../SectionTitle";
import Section from "../Section";

export default function Bio() {
  return (
    <Section id='bio'>
      <article className="content">
        <div className="left">
          <div className="profile">
            <img src={ProfileImage} />
          </div>
        </div>
        <div className="right">
          <SectionTitle title='About' description='just to get to know me better.' />
        </div>
      </article>
    </Section>
  )
}
