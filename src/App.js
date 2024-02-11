
import Home from "./pages/Home";
import AppContext from "./utils/AppContext";
import { useState } from "react";
import HeroBackImg from '../src/assets/hero-backimg.png'
import { HeroBackgroundImg, HeroBackgroundImgWrap } from "./styles/Nav";

function App() {

  const [reserve, setReserve] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const shareData = {
    reserve, 
    setReserve,
    confirm, 
    setConfirm
  }

  return (
    <div style={{backgroundColor : "#f8f8f8", height: "97vh", position:"relative", width: "100%"}}>
      
      <AppContext.Provider value={shareData}>
      <HeroBackgroundImgWrap>
          <HeroBackgroundImg src = {HeroBackImg} />
        </HeroBackgroundImgWrap>
        <Home />
      </AppContext.Provider>
    </div>
  );
}

export default App;
