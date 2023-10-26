import { useContext } from "react";
import ProfileImage from "../../assets/images/profile.webp";
import SectionTitle from "../SectionTitle";
import Section from "../section/Section";
import Story from "../Story";
import { DataContext } from "../../context/DataContext";
import './bio.scss';

export default function Bio() {
  const { sections: { bio } } = useContext(DataContext);
  const { personal } = useContext(DataContext);

  return (
    <Section id='bio'>
      <article className="content">
        <div className="left">
          <div className="profile">
            <img src={ProfileImage} title="Jan Zavrl" alt="Jan Zavrl" />
          </div>
        </div>
        <div className="right">
          <SectionTitle title={bio.title} description={bio.description} />
          <div className="info">
            <div className="personal">
              <ul>
                <li>new <strong>{personal.personal.title}</strong>([</li>
                <li>
                  <ul>
                    {Object.entries(personal.personal.content).map(([key, data]) => {
                      return <li>'{key}' => '{data}',</li>;
                    })}
                  </ul>
                </li>
                <li>])-><strong>{personal.skills.title}</strong>([</li>
                <li>
                  <ul>
                    {Object.entries(personal.skills.content).map(([key, data]) => {
                      return <li>'{key}' => {data},</li>;
                    })}
                  </ul>
                </li>
                <li>]);</li>
              </ul>
            </div>
            <div className="contact">
              <ul>
                <li>new <strong>{personal.contact.title}</strong>([</li>
                <li>
                  <ul>
                    {Object.entries(personal.contact.content).map(([key, data]) => {
                      return <li>'{key}' => <a href={data.link} target="_blank">'{data.title}'</a>,</li>;
                    })}
                  </ul>
                </li>
                <li>]);</li>
              </ul>
            </div>
          </div>
        </div>
        <Story />
      </article>
    </Section>
  )
}
