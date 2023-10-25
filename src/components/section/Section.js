import './section.scss';

export default function Section({id, children}) {
  const classes = ['section'];
  return (
    <section id={id} className={[id, ...classes].join(' ')}>
      {children}
    </section>
  )
}
