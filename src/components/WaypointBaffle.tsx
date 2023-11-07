import React, {PropsWithChildren, useRef} from "react";
import { Waypoint } from "react-waypoint";
import baffle from 'baffle';

export default function WaypointBaffle({ children }: PropsWithChildren) {
  const ref = useRef<HTMLSpanElement>(null!);

  return (
    <Waypoint onEnter={(event) => {
      if (event.previousPosition !== 'above') {
        baffle(ref.current.childNodes, {
          characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"]
        }).start().reveal(1000);
      }
    }}>
      <span ref={ref}>{children}</span>
    </Waypoint>
  )
}
