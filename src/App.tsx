// import { BaseHeader } from "./Components/Header/BaseHeader";
import { Celebrate } from "./Components/Celebrate/Celebrate";
import { Gift } from "./Components/Gift/Gift";
import { Giving } from "./Components/Giving/Giving";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { New } from "./Components/New Gifts/New";
import { ScrollUP } from "./Components/ScrollUp/ScrollUp";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <ScrollUP />
      <main>
        <Home />
        <Giving />
        <Celebrate />
        <Gift />
        <New />
      </main>
    </>
  );
}

export default App;
