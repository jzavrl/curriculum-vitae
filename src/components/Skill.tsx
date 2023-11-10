import React from "react"
import WaypointBaffle from "./WaypointBaffle";
import { SkillType } from "../services/types.service";

export default function Skill({title, technologies}: SkillType) {
  return (
    <>
      <div className="skill">{title}</div>
      <WaypointBaffle>
        <div className="detailed">{technologies.join(', ')}</div>
      </WaypointBaffle>
    </>
  )
}
