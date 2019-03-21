import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }

  stateEvent(event) {
    this.setState(
      { searchString: event.target.value }
    )
  }

  render() { 
    let searchWord = this.state.searchString.toLowerCase()
    let filteredList = this.recipes.filter( recipe => {
      return recipe.title.toLowerCase().includes(searchWord) ||
        recipe.ingredients.toLowerCase().includes(searchWord)
    })

    const recipeComponent = filteredList.map((recipe, i) => {
      return <RecipeItem recipe = { recipe } search={ searchWord } key = { i } />
    })

    return (
      <div className="App">
        <Navbar stateEvent = { this.stateEvent.bind(this) } searchString = { this.state.searchString }/>
        <div className="container mt-10">
          <div className="row">
            { recipeComponent }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
