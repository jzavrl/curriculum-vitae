import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import ReactMarkdown from "react-markdown";
import baffle from 'baffle';
import {
  GlobalContext,
  StoryType,
  ToggleFunction
} from "../services/types.service";

export default function Description({
  name,
  showStory,
  toggle
}: {
  name: StoryType,
  showStory: string,
  toggle: ToggleFunction
}) {
  const {about} = useContext<GlobalContext>(DataContext);

  useEffect(() => {
    // Store the original HTML for later. Baffle will flatten all elements
    // inside, meaning we lose any markup inside <p> such as <a>. So we store
    // the original her and replace it back once Baffle ends.
    const content: HTMLElement = document.getElementById(name)!.cloneNode(true) as HTMLElement;
    const html: string = content.innerHTML;

    baffle(document.querySelectorAll('#' + name + ' > p'), {
      characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"]
    }).start().reveal(1000);

    // Baffle doesn't have a callback function, so we use a timeout.
    setTimeout((): void => {
      document.getElementById(name)!.innerHTML = html;
    }, 800);

    // Trigger window resize so waypoints gets the new positions.
    window.dispatchEvent(new Event('resize'));
  }, [showStory]);

  return (
    <article
      id={name}
      className={toggle(['description', name + '-description'], name)}
    >
      <ReactMarkdown>
        {about[name]}
      </ReactMarkdown>
    </article>
  )
}
