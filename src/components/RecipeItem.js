import React from 'react'
import Highlight from './Highlight';

const RecipeItem = ({ recipe, search }) => (
  <div className="col-sm-3 mt-4">
    <div className="card">
      <img className="card-img-top img-fluid" src={ recipe.thumbnail } alt={ recipe.title }/>
      <div className="card-body">
        <h5 className="card-title">
          <Highlight text={recipe.title} search={search} />
        </h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
            <Highlight text={recipe.ingredients} search={search} />
        </p>
      </div>
    </div>
  </div>
)

export default RecipeItem;
