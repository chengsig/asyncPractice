import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 2px;
  color: #555;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100px;
  border: 1px solid lightgrey;
`;

const initialState = {
    pokemon: '',
}

class Form extends Component{
  constructor(props){
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchPokemon(this.state.pokemon);
    this.setState(initialState);
  }

  render(){
    return(
        <StyledForm id="styledForm" onSubmit={this.handleSubmit}>
            <label htmlFor="pokemon">Pokemon:</label><br/>
            <StyledInput id="pokemon" 
                         onChange={this.handleChange} 
                         value={this.state.pokemon} 
                         name="pokemon"
                         /><br/>
            <button id="search">Catch!</button>
        </StyledForm>
    )}
}

export default Form;