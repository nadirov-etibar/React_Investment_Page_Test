import React, {useState} from 'react';
import './App.css';
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";

const App = () => {
    const [number, setNumber] = useState(1);
    const nextPage = () => {
        if (number < 3){
            setNumber(number + 1);
        }
    };

    const previousPage = () => {
        if (number !== 1 && number !== 0){
            setNumber(number - 1);
        }
    };

  return (
      <div className="App">
        <LeftSide pageNumber={number}/>
        <RightSide pageNumber={number} previousPage={previousPage} nextPage={nextPage} />
      </div>
  );
}

export default App;
