import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
// import Card from "./components/card/card.component";
import "./App.css";

const App = () => {
  //React hook set initial value to monsters is empty array
  const [monsters, setMonsters] = useState([]);

  //Empty array[] meaning only load function onces when the page mounted
  useEffect(() => {
    //Create promises fetching the array from the API request
    //Get the response into JSON data
    //Set the monsters to that JSON data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  return (
    <>
      <CardList monsters={monsters} />
    </>
  );
};

export default App;
