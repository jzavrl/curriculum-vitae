import Hero from "./components/sections/Hero";
import Bio from "./components/sections/Bio";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";
import { DataWrapper } from "./context/DataContext";
import './assets/sass/core/core.scss';

function App() {
  return (
    <>
      <DataWrapper>
        <Hero />
        <Bio />
        <Skills />
        <Footer />
      </DataWrapper>
    </>
  )
}

export default App;
