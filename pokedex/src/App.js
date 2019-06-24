import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Form from './Form'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
    }
    this.getPokemon = this.getPokemon.bind(this);
  }

  async getPokemon(searchName) {
    searchName = searchName.toLowerCase().trim();
    let url = `https://pokeapi.co/api/v2/pokemon/${searchName}/`;
    let res = await axios.get(url);
    let name = res.data.forms[0].name;
    let image = res.data.sprites.front_default;
    this.setState({
      isLoading: false,
      name,
      image,
    })
    return res.data;
  }


  render() {
    return (
      <div className="App">
        <Form id="search" fetchPokemon={this.getPokemon}/>
        {this.state.name}
        <img src={this.state.image} alt="currentSearch"/>
      </div>
    )
  }
}
