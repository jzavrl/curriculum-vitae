import 'nodecloud-particleground';
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

export default function Particles() {
  // const { particles } = useContext(DataContext);
  // console.log(particles);
  useEffect(() => {
    const pg = window.particleground(document.getElementById('particles'), {
      density: 70000,
      dotColor: '#37474F',
      lineColor: '#37474F',
      directionX: 'center',
      directionY: 'center',
      particleRadius: 8,
      lineWidth: 4,
      parallax: false,
      proximity: 500,
      minSpeedX: 0.6,
      minSpeedY: 0.6
    });

    return () => pg.destroy();
  }, []);
  return <div id="particles" className="particles"></div>;
}
