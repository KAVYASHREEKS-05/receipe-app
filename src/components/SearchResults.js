import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipes } from '../api';
import { useNavigate } from 'react-router-dom';

function SearchResults() {
  const { query } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true); // Set loading to true when starting to fetch data
      const results = await fetchRecipes(query);
      setRecipes(results);
      setLoading(false); // Set loading to false once data is fetched
    };
    getRecipes();
  }, [query]);

  const handleViewRecipe = (id) => {
    navigate(`/recipe/${id}`); // Navigate to the recipe details page
  };

  return (
    <div className="container">
      {!loading && recipes.length > 0 && (
        <h2>Search Results for "{query}"</h2>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : recipes.length === 0 ? (
        <p>No recipes found for "{query}".</p>
      ) : (
        <div className="row">
          {recipes.map(recipe => (
            <div key={recipe.idMeal} className="col-md-4 mb-4">
              <div className="card ">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="card-img-top img-fluid"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{recipe.strMeal}</h5>
            
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary"  onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
