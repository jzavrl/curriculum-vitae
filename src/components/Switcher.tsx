import React, {Dispatch, SetStateAction} from "react";
import {
  StorySwitcher,
  StoryType,
  ToggleFunction
} from "../services/types.service";

export default function Switcher({
  toggle,
  setShowStory
}: {
  toggle: ToggleFunction,
  setShowStory: Dispatch<SetStateAction<StoryType>>
}) {
  const handleClick: StorySwitcher = (event): void => setShowStory(event.currentTarget.name as StoryType);

  return (
    <ul id="switcher" className="switcher">
      <li>
        <button name="short" className={toggle(['button'], 'short')} onClick={handleClick}>very short on me</button>
      </li>
      <li>
        <button name="long" className={toggle(['button'], 'long')} onClick={handleClick}>not so short on me </button>
      </li>
    </ul>
  )
}
