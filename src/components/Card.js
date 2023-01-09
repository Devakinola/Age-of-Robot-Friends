import "./Card.css";

const Card = ({ name, says, id }) => {
  return (
    <div className=" robo dib ma3 tc grow bg-light-green br3 bw2 shadow-5">
      <img
        src={"https://robohash.org/ " + name + "?size=200x200"}
        alt={name + " Robot"}
      />
      <div>
        <h2>{name}</h2>
        <p>{says}</p>
      </div>
    </div>
  );
};

export default Card;
