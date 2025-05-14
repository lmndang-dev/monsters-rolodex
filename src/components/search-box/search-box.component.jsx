import "./search-box.style.css";

const SearchBox = ({ onChangeHandler }) => {
  return (
    <input
      className="search-box-container"
      type="search"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
