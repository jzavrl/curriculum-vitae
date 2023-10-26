import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import 'nodecloud-particleground';
import './particles.scss';

export default function Particles({ setParticles }) {
  const { particles } = useContext(DataContext);

  useEffect(() => {
    const element = document.getElementById('particles');
    const pg = window.particleground(element, particles);
    setParticles(element);

    return () => {
      pg.destroy();
      setParticles(null);
    };
  }, []);

  return <div id="particles" className="particles hidden"></div>;
}
