import { useParams, Link } from "react-router";

function RecipeDetails({ recipes }) {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === parseInt(id));

    if (!recipe) {
        return (
            <div className="details-page">
                <p>Recipe not found!</p>
                <Link to="/recipes" className="back-link">
                    ← Back to Recipes
                </Link>
            </div>
        );
    }

    const badgeClass = recipe.type === "Veg" ? "badge-veg" : "badge-nonveg";

    return (
        <div className="details-page">
            <Link to="/recipes" className="back-link">
                ← Back to Recipes
            </Link>

            <div className="details-card">
                <div className="details-header">
                    <div className="details-emoji">{recipe.emoji}</div>
                    <div className="details-title-area">
                        <h1 className="details-title">{recipe.name}</h1>
                        <div className="badge-wrapper">
                            <span className={`badge ${badgeClass}`}>{recipe.type}</span>
                            {recipe.cookingTime <= 20 && (
                                <span className="badge badge-quick">⚡ Quick</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="details-meta-grid">
                    <div className="meta-box">
                        <span className="meta-label">Cuisine</span>
                        <span className="meta-value">{recipe.cuisine}</span>
                    </div>
                    <div className="meta-box">
                        <span className="meta-label">Cooking Time</span>
                        <span className="meta-value">{recipe.cookingTime} mins</span>
                    </div>
                    <div className="meta-box">
                        <span className="meta-label">Difficulty</span>
                        <span className="meta-value">{recipe.difficulty}</span>
                    </div>
                </div>

                <div className="ingredients-section">
                    <div className="ingredients-header">
                        <h2 className="ingredients-title">Ingredients</h2>
                        <span className="ingredients-count">
                            {recipe.ingredients.length} ingredients
                        </span>
                    </div>

                    <ul className="ingredients-list">
                        {recipe.ingredients.map((item, index) => (
                            <li key={index} className="ingredient-item">
                                <span className="ingredient-bullet">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;