import 'nodecloud-particleground';
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

export default function Particles() {
  const { particles } = useContext(DataContext);
  useEffect(() => {
    const pg = window.particleground(document.getElementById('particles'), particles);

    return () => pg.destroy();
  }, []);
  return <div id="particles" className="particles"></div>;
}
