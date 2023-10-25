import { useContext } from "react";
import Section from "../section/Section";
import SectionTitle from "../SectionTitle";
import Skill from "../Skill";
import { DataContext } from "../../context/DataContext";

export default function Skills() {
  const { skills, sections } = useContext(DataContext);

  return (
    <Section id='skills'>
      <article className="content">
        <SectionTitle title={sections.skills.title} description={sections.skills.description} />
        <ul className="skill-list">
          {Object.entries(skills).map(([skill, technologies]) => {
            return <li><Skill title={skill} technologies={technologies} /></li>
          })}
        </ul>
      </article>
    </Section>
  )
}
