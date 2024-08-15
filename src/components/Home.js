import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [ingredient, setIngredient] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate(`/search/${ingredient}`);
    };

  return (
    <div>
      <h1 className="text-center " >Recipe Finder</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <input  
          type="text"
          className="form-control mb-2"
          placeholder="Enter ingredients"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  );
}

export default Home;
