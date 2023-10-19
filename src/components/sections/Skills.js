import { useContext } from "react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Skill from "../Skill";
import { DataContext } from "../../context/DataContext";

export default function Skills() {
  const {skills} = useContext(DataContext);

  return (
    <Section id='skills'>
      <article className="content">
        <SectionTitle title='Skills' description='the aces up my sleeve.'/>
        <ul className="skill-list">
          {Object.entries(skills).map(([skill, technologies]) => {
            return <li><Skill title={skill} technologies={technologies} /></li>
          })}
        </ul>
      </article>
    </Section>
  )
}
