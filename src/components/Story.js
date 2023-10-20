import { useState } from "react";
import OvalGray from '../assets/images/layout/oval-gray.svg';
import Switcher from "./Switcher";
import Description from "./Description";

export default function Story() {
  const [showStory, setShowStory] = useState('short');

  const toggleClasses = (existing = [], type) => {
    return [...existing, showStory === type && 'active'].filter(Boolean).join(' ');
  };

  return (
    <div className="story">
      <Switcher
        toggleClasses={toggleClasses}
        setShowStory={setShowStory}
      />
      <Description
        name="short"
        showStory={showStory}
        toggleClasses={toggleClasses}
      />
      <Description
        name="long"
        showStory={showStory}
        toggleClasses={toggleClasses}
      />
      <img className="oval" src={OvalGray}/>
    </div>
  )
}
