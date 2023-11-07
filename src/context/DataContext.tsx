import React, { createContext, PropsWithChildren } from "react";
import skills from "../content/skills.json";
import about from "../content/about.json";
import sections from "../content/sections.json";
import particles from "../content/particles.json";
import parallax from "../content/parallax.json";
import personal from "../content/personal.json";
import { GlobalContext } from "../services/types.service";

export const DataContext = createContext<GlobalContext | {}>({});

export const DataWrapper = ({children}: PropsWithChildren) => {
  return (
    <DataContext.Provider
      value={{
        skills: skills,
        about: about,
        sections: sections,
        particles: particles,
        parallax: parallax,
        personal: personal
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
