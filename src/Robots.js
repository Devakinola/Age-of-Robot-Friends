import Card from "./Card";

export const RobotList = ({ friends }) => {
  const list = friends.map((user, i) => {
    return (
      <Card key={friends[i].id} name={friends[i].name} says={friends[i].says} />
    );
  });
  return <div>{list}</div>;
};
