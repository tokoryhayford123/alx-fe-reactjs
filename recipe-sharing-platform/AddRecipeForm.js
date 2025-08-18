import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }
    const ingredientList = ingredients.split(",").map(i => i.trim());
    if (ingredientList.length < 2) {
      setError("Please provide at least two ingredients (separated by commas).");
      return;
    }

    const newRecipe = { title, ingredients: ingredientList, steps };
    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="flex justify-center p-6">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Recipe</h2>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Recipe Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Ingredients</label>
          <textarea 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter ingredients separated by commas"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Preparation Steps</label>
          <textarea 
            value={steps} 
            onChange={(e) => setSteps(e.target.value)} 
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter preparation steps"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
