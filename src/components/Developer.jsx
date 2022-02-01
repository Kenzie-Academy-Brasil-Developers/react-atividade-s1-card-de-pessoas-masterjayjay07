import "./style.css";

const Developers = ({ name, age, country }) => {
  return (
    <div className="devCard">
      <h1>Dev: {name}</h1>
      <p>Idade: {age}</p>
      <p>País: {country}</p>
    </div>
  );
};
export default Developers;
