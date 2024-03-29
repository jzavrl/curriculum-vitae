import React, { useContext } from "react";
import Section from "../section/Section";
import SectionTitle from "../SectionTitle";
import Skill from "../Skill";
import { DataContext } from "../../context/DataContext";
import './skills.scss';
import {GlobalContext} from "../../services/types.service";

export default function Skills() {
  const { skills, sections } = useContext<GlobalContext>(DataContext);

  return (
    <Section id='skills'>
      <article className="content">
        <SectionTitle title={sections.skills.title} description={sections.skills.description} />
        <ul className="skill-list">
          {Object.entries(skills).map(([skill, technologies]) => {
            return <li key={skill}><Skill title={skill} technologies={technologies} /></li>
          })}
        </ul>
      </article>
    </Section>
  )
}
