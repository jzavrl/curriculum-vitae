import React, {Dispatch, SetStateAction, useContext, useEffect} from "react";
import { DataContext } from "../context/DataContext";
import 'nodecloud-particleground';
import './particles.scss';
import {GlobalContext} from "../services/types.service";

export default function Particles({
  setParticles
}: {
  setParticles: Dispatch<SetStateAction<HTMLElement | null>>
}) {
  const { particles } = useContext<GlobalContext>(DataContext);

  useEffect(() => {
    const element: HTMLElement = document.getElementById('particles')!;
    const pg = window.particleground(element, particles);
    setParticles(element);

    return (): void => {
      pg.destroy();
      setParticles(null);
    };
  }, []);

  return <div id="particles" className="particles hidden"></div>;
}
