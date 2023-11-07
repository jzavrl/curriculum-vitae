import React, { useContext } from "react";
import ProfileImage from '../../assets/images/profile.webp';
import SectionTitle from "../SectionTitle";
import Section from "../section/Section";
import Story from "../Story";
import { DataContext } from "../../context/DataContext";
import './bio.scss';
import { GlobalContext } from "../../services/types.service";

export default function Bio() {
  const { sections: { bio } } = useContext<GlobalContext>(DataContext);
  const { personal } = useContext<GlobalContext>(DataContext);

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
                    {Object.entries(personal.personal.content as Array<string>).map(([key, data]) => {
                      return <li>'{key}' =&gt; '{data}',</li>;
                    })}
                  </ul>
                </li>
                <li>])-&gt;<strong>{personal.skills.title}</strong>([</li>
                <li>
                  <ul>
                    {Object.entries(personal.skills.content as Array<string>).map(([key, data]) => {
                      return <li>'{key}' =&gt; {data},</li>;
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
                    {Object.entries(personal.contact.content as Array<{link: string, title: string}>).map(([key, data]) => {
                      return <li>'{key}' =&gt; <a href={data.link} target="_blank">'{data.title}'</a>,</li>;
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
