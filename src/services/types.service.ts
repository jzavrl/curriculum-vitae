import React from "react";

export type StoryType = 'short' | 'long';

export type GlobalContext = {
  [parent: string]: {
    [child: string]: any
  }
}

export interface Skill {
  title: string,
  technologies: Array<string>
}

export type ToggleFunction = (existing: Array<string>, type: StoryType) => string;

export type StorySwitcher = (event: React.MouseEvent<HTMLButtonElement>) => void;
