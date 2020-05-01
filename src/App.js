import React from "react";
import "./styles.css";

export default function App() {
  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      isGoing: true,
      numberOfGuests: 2
    }
  );

  function handleInputChange(e) {
    // const name = e.target.name
    // const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value
    // console.log(newValue)
    const { name, value, type, checked } = e.target; // this means e.target.name, e.target.value ..............
    const newValue = type === "checkbox" ? checked : value;
    // console.log(name,newValue, type)
    // console.log({[name]: newValue})
    setUserInput({
      [name]: newValue
    });
  }
  return (
    <form>
      <label>
        is going :
        <input
          name="isGoing"
          type="checkbox"
          checked={userInput.isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        number of Guests :
        <input
          name="numberOfGuests"
          type="number"
          value={userInput.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
