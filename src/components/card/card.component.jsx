import "./card.style.css";
//Card will pass down the value of props
//The props will be pass down menu from an array and destructured the array by value name and email
//Destructured the array then already know the value will be passed down, in this case is name and email
const Card = ({name, email, id}) => {
  return (
  <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set2`} alt="" />
    <h3>{name}</h3>
    <div>{email}</div>
  </div>
  );
}

export default Card;