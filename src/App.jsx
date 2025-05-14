import { useState, useEffect } from 'react';
import './App.css'

//Card will pass down the value of props
//The props will be pass down menu from an array and destructured the array by value name and email
//Destructured the array then already know the value will be passed down, in this case is name and email
const Card = ({name, email, id}) => {
  return (
  <div>
    <img src={`https://robohash.org/${id}?set=set2`} alt="" />
    <h3>{name}</h3>
    <div>{email}</div>
  </div>
  );
}

const App = () => {

  //React hook set initial value to monsters is empty array
  const [monsters, setMonsters] = useState([]);
  
  //Empty array[] meaning only load function onces when the page mounted
  useEffect(() => {
    //Create promises fetching the array from the API request
    //Get the response into JSON data
    //Set the monsters to that JSON data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  },[]);

  return (
    <>
      {
        //props: email "Sincere@april.biz" name "Leanne Graham"
        //key is the unique identify for each card - key is required
        //idx is the number of index in each item on the array, start with 0
        //{name. email, id} is destructured the object form the arrays
        monsters.map(({name, email, id}, idx) => {
          console.log(idx);
          return <Card key={`${name}-${idx}`} name={name} email={email} id={id}></Card>
        })
      }
    </>
  )
}

export default App
