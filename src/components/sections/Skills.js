import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Skill from "../Skill";

export default function Skills() {
  return (
    <Section id='skills'>
      <article className="content">
        <SectionTitle title='Skills' description='the aces up my sleeve.'/>
        <ul className="skill-list">
          <li>
            <Skill />
          </li>
          <li>
            <div className="skill">Backend</div>
            <div className="detailed waypoint-reveal">php, mysql, git, solr, redis</div>
          </li>
          <li>
            <div className="skill">Frontend</div>
            <div className="detailed waypoint-reveal">sass, less, javascript, jquery, node, gulp, grunt, angular, vue
            </div>
          </li>
          <li>
            <div className="skill">Devops</div>
            <div className="detailed waypoint-reveal">linux, apache, nginx, ubuntu, vagrant, docker, ci</div>
          </li>
          <li>
            <div className="skill">Design</div>
            <div className="detailed waypoint-reveal">ux, ui, photoshop, illustrator, affinity designer</div>
          </li>
          <li>
            <div className="skill">Certified</div>
            <div className="detailed waypoint-reveal">grand master, developer, frontend specialist, backend specialist
            </div>
          </li>
        </ul>
      </article>
    </Section>
  )
}
