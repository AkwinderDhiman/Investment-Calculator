import "./App.css";
import Header from "./Components/Header/Header.jsx";
import UserInput from "./Components/UserInput/UserInput.jsx";
import Results from "./Components/Results/Results.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      console.log(prevUserInput);

      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid input data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
