import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../api';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const details = await fetchRecipeDetails(id);
      setRecipe(details);
    };
    getRecipeDetails();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className=' d-flex flex-column align-items-center'>
   <h2 className=' text-uppercase mt-4 mb-4'>{recipe.strMeal}</h2>

    <img
      src={recipe.strMealThumb}
      alt={recipe.strMeal}
      className="img-fluid mb-4"
      style={{ width: '300px', height: 'auto' }}
    />
    <div dangerouslySetInnerHTML={{ __html: recipe.strInstructions }} />
  </div>
  
  );
}

export default RecipeDetail;
