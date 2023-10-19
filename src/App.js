import Bio from "./components/sections/Bio";
import Skills from "./components/sections/Skills";
import { DataWrapper } from "./context/DataContext";

function App() {
  return (
    <>
      <DataWrapper>
        <Bio />
        <Skills />
      </DataWrapper>
    </>
  )
}

export default App;
