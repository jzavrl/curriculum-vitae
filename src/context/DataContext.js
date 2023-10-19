import { createContext } from "react";
import skills from "../content/skills.json";
import about from "../content/about.json";

export const DataContext = createContext({});

export const DataWrapper = ({children}) => {
  return (
    <DataContext.Provider
      value={{
        skills: skills,
        about: about
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
