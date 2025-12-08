import { useContext, useEffect, useState } from "react";
import OvalBlue from '../../assets/images/oval-blue.svg';
import Splash from '../../assets/images/splash.webp';
import Parallax from 'parallax-js';
import { DataContext } from "../../context/DataContext";
import './hero.scss';
import Particles from "../Particles";
import type { GlobalContext } from "../../services/types.service";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function Hero() {
  const { parallax } = useContext<GlobalContext>(DataContext);
  const [particles, setParticles] = useState<HTMLElement | null>(null);
  const { ref, entry } = useIntersectionObserver({
    threshold: 0.4,
    rootMargin: '-60% 0px 0px 0px'
  });

  const handleClick = (): void => {
    document.getElementById('bio')!.scrollIntoView({
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const scene = new Parallax(document.getElementById('parallax'), parallax);
    return () => scene.destroy();
  }, []);

  useEffect(() => {
    if (!particles) return;

    if (entry?.isIntersecting) {
      particles.classList.add('hidden');
    } else {
      particles.classList.remove('hidden');
    }
  }, [entry?.isIntersecting, particles]);

  return (
    <div className="hero-wrapper" ref={ref as any}>
      <section id="hero" className="section hero">
        <ul id="parallax" className="parallax">
          <li className="layer top-container" data-depth="0.20">
            <span className="top">Hello, I'm</span>
          </li>
          <li className="layer title-container" data-depth="0.30">
            <h1 className="title">Jan Zavrl</h1>
          </li>
          <li className="layer bottom-container" data-depth="0.20">
            <span className="bottom">and I solve digital problems</span>
          </li>
          <li className="layer oval-container" data-depth="0.15">
            <img className="oval" src={OvalBlue} alt="oval gradient" />
          </li>
          <li className="layer splash-container" data-depth="0.10">
            <img className="splash" src={Splash} alt="splash visual" />
          </li>
        </ul>

        <button className="button" onClick={handleClick}>let me show you what I am all about</button>
      </section>

      <Particles setParticles={setParticles} />
    </div>
  )
}
