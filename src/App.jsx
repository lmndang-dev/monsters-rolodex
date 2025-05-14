import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

const App = () => {
  //React hook set initial value to monsters is empty array
  const [monsters, setMonsters] = useState([]);

  //React hook set initial value to filteredMonsters is empty array
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  //Empty array[] meaning only load function onces when the page mounted
  useEffect(() => {
    //Create promises fetching the array from the API request
    //Get the response into JSON data
    //Set the monsters to that JSON data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        //Set initial value to monsters and filteredMonsters
        //Make the first loading to show all the monsters
        setMonsters(data);
        setFilteredMonsters(data);
      });
  }, []);

  return (
    <>
      <input
        type="search"
        onChange={(event) => {
          //Get the value from the input field and convert it to lower case
          const searchString = event.target.value.toLowerCase();

          //Create a new array filteredMonsters and find the monsters that match the searchString
          const newFilteredMonsters = monsters.filter((monsters) =>
            monsters.name.toLowerCase().includes(searchString)
          );

          //Set the filteredMonsters to the new array
          //This will update the filteredMonsters to show only the monsters that match the searchString
          setFilteredMonsters(newFilteredMonsters);
        }}
      />
      <CardList monsters={filteredMonsters} />
    </>
  );
};

export default App;
