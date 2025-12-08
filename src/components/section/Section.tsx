import './section.scss';
import type { PropsWithChildren } from "react";

export default function Section({
  id,
  children
}: PropsWithChildren<{
  id: string
}>) {
  const classes = ['section'];
  return (
    <section id={id} className={[id, ...classes].join(' ')}>
      {children}
    </section>
  )
}
