import { RobotList } from "./Robots";
import { Component } from "react";
import { friends } from "./Friends";
import Search from "./search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: friends,
      searchfield: "",
    };
  }

  onsearchchange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredFriends = this.state.friends.filter((friends) => {
      return friends.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>TERMINATORS!</h1>
        <Search
          searchchange={this.onsearchchange}
          searchvalue="Search for friends"
        />
        <RobotList friends={filteredFriends} />
      </div>
    );
  }
}

export default App;
