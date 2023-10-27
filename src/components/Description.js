import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import ReactMarkdown from "react-markdown";
import baffle from 'baffle';

export default function Description({name, showStory, toggleClasses}) {
  const {about} = useContext(DataContext);

  useEffect(() => {
    // Store the original HTML for later. Baffle will flatten all elements
    // inside, meaning we lose any markup inside <p> such as <a>. So we store
    // the original her and replace it back once Baffle ends.
    const content = document.getElementById(name).cloneNode(true).innerHTML;

    baffle(document.querySelectorAll('#' + name + ' > p'), {
      characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"]
    }).start().reveal(1000);

    // Baffle doesn't have a callback function, so we use a timeout.
    setTimeout(() => {
      document.getElementById(name).innerHTML = content;
    }, 800);

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
