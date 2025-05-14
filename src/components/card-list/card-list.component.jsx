import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list-container">
      {
        //props: email "Sincere@april.biz" name "Leanne Graham"
        //key is the unique identify for each card - key is required
        //idx is the number of index in each item on the array, start with 0
        //{name. email, id} is destructured the object form the arrays
        monsters.map(({ name, email, id }, idx) => {
          return (
            <Card
              key={`${name}-${idx}`}
              name={name}
              email={email}
              id={id}
            ></Card>
          );
        })
      }
    </div>
  );
};

export default CardList;
