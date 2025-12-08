import { type PropsWithChildren, useRef, useEffect } from "react";
import baffle from 'baffle';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function WaypointBaffle({ children }: PropsWithChildren) {
  const contentRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const { ref, entry } = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });

  useEffect(() => {
    if (entry?.isIntersecting && contentRef.current && !hasAnimated.current) {
      hasAnimated.current = true;
      baffle(contentRef.current.childNodes, {
        characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"]
      }).start().reveal(1000);
    }
  }, [entry?.isIntersecting]);

  return (
    <span ref={ref as any}>
      <span ref={contentRef}>{children}</span>
    </span>
  );
}
