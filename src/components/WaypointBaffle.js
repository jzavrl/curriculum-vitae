import React, { useRef } from "react";
import { Waypoint } from "react-waypoint";
import baffle from 'baffle';

export default function WaypointBaffle({ children }) {
  const ref = useRef();

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
