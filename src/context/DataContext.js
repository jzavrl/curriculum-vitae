import { createContext } from "react";
import skills from "../content/skills.json";
import about from "../content/about.json";
import sections from "../content/sections.json";
import particles from "../content/particles.json";
import parallax from "../content/parallax.json";
import personal from "../content/personal.json";

export const DataContext = createContext({});

export const DataWrapper = ({children}) => {
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
