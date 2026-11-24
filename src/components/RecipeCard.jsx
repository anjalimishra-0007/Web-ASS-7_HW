import { Link } from "react-router";

function RecipeCard({ recipe, onToggleFavourite }) {
    const badgeClass = recipe.type === "Veg" ? "badge-veg" : "badge-nonveg";

    return (
        <div className="recipe-card">
            <div className="card-top">
                <div className="recipe-emoji">{recipe.emoji}</div>
                <div className="badge-wrapper">
                    <span className={`badge ${badgeClass}`}>{recipe.type}</span>
                    {recipe.cookingTime <= 20 && (
                        <span className="badge badge-quick">⚡ Quick</span>
                    )}
                </div>
            </div>

            <h3 className="recipe-name">{recipe.name}</h3>

            <div className="recipe-info">
                <span className="info-item">🌍 {recipe.cuisine}</span>
                <span className="info-item">⏱️ {recipe.cookingTime} mins</span>
                <span className="info-item">📊 {recipe.difficulty}</span>
            </div>

            <div className="card-actions">
                <button
                    className={`btn-toggle-fav ${recipe.isFavourite ? "is-fav" : ""}`}
                    onClick={() => onToggleFavourite(recipe.id)}
                >
                    {recipe.isFavourite ? "❤ Remove from Favourites" : "♡ Add to Favourites"}
                </button>

                <Link to={`/recipes/${recipe.id}`} className="btn-details">
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default RecipeCard;