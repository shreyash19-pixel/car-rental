import Home from "./pages/Home";
import AppContext from "./utils/AppContext";
import { useState } from "react";

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
    <div>
      <AppContext.Provider value={shareData}>
        <Home />
      </AppContext.Provider>
    </div>
  );
}

export default App;
