import { Link } from 'react-router-dom';
import data from '../data.json';

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={recipe.image} alt={recipe.name} className="rounded-lg mb-2" />
            <h2 className="text-xl font-semibold">{recipe.name}</h2>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
