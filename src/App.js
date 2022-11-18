import { RobotList } from "./Robots";
import { friends } from "./Friends";
import Search from "./search";

const App = () => {
  return (
    <div className="tc">
      <h1>TERMINATORS!</h1>
      <Search searchvalue="Search for friends" />
      <RobotList friends={friends} />
    </div>
  );
};

export default App;
