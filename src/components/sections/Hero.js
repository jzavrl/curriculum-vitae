import { useContext, useEffect } from "react";
import OvalBlue from '../../assets/images/layout/oval-blue.svg';
import Splash from '../../assets/images/layout/splash.png';
import Parallax from 'parallax-js';
import { DataContext } from "../../context/DataContext";
import './hero.scss';

export default function Hero() {
  const { parallax } = useContext(DataContext);
  const handleClick = () => {
    document.getElementById('bio').scrollIntoView({
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const scene = new Parallax(document.getElementById('parallax'), parallax);
    return () => scene.destroy();
  }, []);

  return (
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
          <img className="oval" src={OvalBlue} />
        </li>
        <li className="layer splash-container" data-depth="0.10">
          <img className="splash" src={Splash} />
        </li>
      </ul>

      <button className="button" onClick={handleClick}>let me show you what I am all about</button>
    </section>
  )
}
