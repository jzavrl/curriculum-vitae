const classes = ['section'];

export default function Section({id, children}) {
  return (
    <section id={id} className={[id, ...classes].join(' ')}>
      {children}
    </section>
  )
}
