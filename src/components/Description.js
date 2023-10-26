import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import ReactMarkdown from "react-markdown";
import baffle from 'baffle';

export default function Description({name, showStory, toggleClasses}) {
  const {about} = useContext(DataContext);

  useEffect(() => {
    // Remix the story content when switching.
    baffle(document.querySelectorAll('.description > p'), {
      characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"]
    }).start().reveal(1000);

    // Trigger window resize so waypoints gets the new positions.
    window.dispatchEvent(new Event('resize'));
  }, [showStory]);

  return (
    <article
      id={name}
      className={toggleClasses(['description', name + '-description'], name)}
    >
      <ReactMarkdown>
        {about[name]}
      </ReactMarkdown>
    </article>
  )
}
