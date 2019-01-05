import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Searchbox from "../components/Searchbox";


class Search extends Component {
  render() {
    return (
     <div>
       <Nav />
       <Jumbotron />
       <Searchbox />
    </div>
    );
  }
}

export default Search;
