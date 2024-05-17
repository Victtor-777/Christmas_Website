// import { BaseHeader } from "./Components/Header/BaseHeader";
import { Celebrate } from "./Components/Celebrate/Celebrate";
import { Footer } from "./Components/Footer/Footer";
import { Gift } from "./Components/Gift/Gift";
import { Giving } from "./Components/Giving/Giving";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Message } from "./Components/Message/Message";
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
        <Message />
      </main>
      <Footer />
    </>
  );
}

export default App;
