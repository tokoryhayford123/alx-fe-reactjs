import { useParams } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((item) => item.id.toString() === id);

  if (!recipe) {
    return <div className="p-6 text-red-500">Recipe not found!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="rounded-lg mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p className="mb-4">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
