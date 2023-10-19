export default function Switcher({toggleClasses, setShowStory}) {
  const handleClick = ({target}) => setShowStory(target.name)

  return (
    <ul id="switcher" className="switcher">
      <li>
        <button name="short" className={toggleClasses(['button'], 'short')} onClick={handleClick}>very short on me</button>
      </li>
      <li>
        <button name="long" className={toggleClasses(['button'], 'long')} onClick={handleClick}>not so short on me </button>
      </li>
    </ul>
  )
}
