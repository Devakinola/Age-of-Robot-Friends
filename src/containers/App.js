import { RobotList } from "../components/Robots";
import { Component } from "react";
import Scroll from "../components/Scroll";
import Search from "../components/search";
import "./App.css";
import { friends } from "../components/Friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ friends: friends }))
    );
  }

  onsearchchange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredFriends = this.state.friends.filter((eachFriend) => {
      return eachFriend.name
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
        <Scroll>
          <RobotList friends={filteredFriends} />
        </Scroll>
      </div>
    );
  }
}

export default App;
