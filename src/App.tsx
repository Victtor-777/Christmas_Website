// import { BaseHeader } from "./Components/Header/BaseHeader";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { ScrollUP } from "./Components/ScrollUp/ScrollUp";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <ScrollUP />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
