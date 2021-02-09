import { useState } from 'react';
import ReactDOM from 'react-dom';
import ModeContext from './context/modeContext'
import Header from './header/index'

const App = () => {
      const [mode, setMode] = useState("day");
  return (
    <ModeContext.Provider value={{
                    mode, 
                    switchMode: () => (mode === "day" ? setMode("night") : setMode("day"))}} >
        <Header />
    </ModeContext.Provider>
  )
};
 
ReactDOM.render(<App />, document.getElementById('root'));
 