import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ReactMarkdown from "react-markdown";

export default function Description({name, toggleClasses}) {
  const {about} = useContext(DataContext);

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
