import { useContext } from "react";
import ProfileImage from "../../assets/images/layout/profile.png";
import SectionTitle from "../SectionTitle";
import Section from "../section/Section";
import Story from "../Story";
import { DataContext } from "../../context/DataContext";

export default function Bio() {
  const { sections: { bio } } = useContext(DataContext);

  return (
    <Section id='bio'>
      <article className="content">
        <div className="left">
          <div className="profile">
            <img src={ProfileImage} />
          </div>
        </div>
        <div className="right">
          <SectionTitle title={bio.title} description={bio.description} />
          <div className="info">
            <div className="personal">
              <ul>
                <li>new <strong>PersonalInfo</strong>([</li>
                <li>
                  <ul>
                    <li>'name' => 'Jan Zavrl',</li>
                    <li>'location' => 'Ljubljana, Slovenia',</li>
                  </ul>
                </li>
                <li>])-><strong>addSkills</strong>([</li>
                <li>
                  <ul>
                    <li>'backend_developer' => TRUE,</li>
                    <li>'frontend_developer' => TRUE,</li>
                    <li>'devops' => TRUE,</li>
                    <li>'ux_ui' => TRUE,</li>
                  </ul>
                </li>
                <li>]);</li>
              </ul>
            </div>
            <div className="contact">
              <ul>
                <li>new <strong>ContactInfo</strong>([</li>
                <li>
                  <ul>
                    <li>'email' => <a className="link" href="mailto:jzavrl@gmail.com">'jzavrl@gmail.com'</a>,</li>
                    <li>'linkedin' => <a className="link" href="https://www.linkedin.com/in/janzavrl" target="_blank">'linkedin.com/in/janzavrl'</a>,</li>
                    <li>'drupal' => <a className="link" href="https://www.drupal.org/u/jzavrl" target="_blank">'drupal.org/u/jzavrl'</a>,</li>
                    <li>'github' => <a className="link" href="https://github.com/jzavrl" target="_blank">'github.com/jzavrl'</a>,</li>
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
