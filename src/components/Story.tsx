import React, { useState } from "react";
import OvalGray from '../assets/images/oval-gray.svg';
import Switcher from "./Switcher";
import Description from "./Description";
import {StoryType, ToggleFunction} from "../services/types.service";

export default function Story() {
  const [showStory, setShowStory] = useState<StoryType>('short');

  const toggleClasses: ToggleFunction = (existing= [], type) => {
    return [...existing, showStory === type && 'active'].filter(Boolean).join(' ');
  };

  return (
    <div className="story">
      <Switcher
        toggle={toggleClasses}
        setShowStory={setShowStory}
      />
      <Description
        name="short"
        showStory={showStory}
        toggle={toggleClasses}
      />
      <Description
        name="long"
        showStory={showStory}
        toggle={toggleClasses}
      />
      <img className="oval" src={OvalGray} alt="oval gradient" />
    </div>
  )
}
