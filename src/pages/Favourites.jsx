import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard";

function Favourites({ recipes, onToggleFavourite }) {
    const favouriteRecipes = recipes.filter((r) => r.isFavourite);
    const totalCookingTime = favouriteRecipes.reduce(
        (sum, r) => sum + r.cookingTime,
        0
    );

    return (
        <div className="favourites-page">
            <div className="page-header">
                <h1 className="page-title">My Favourite Recipes</h1>
                <p className="page-subtitle">
                    All your saved recipes in one place.
                </p>
            </div>

            {favouriteRecipes.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">🍳</div>
                    <h2 className="empty-title">No favourites yet</h2>
                    <p className="empty-desc">
                        You haven't added any recipes to your favourites list yet. Explore
                        our collection and bookmark what you love!
                    </p>
                    <Link to="/recipes" className="empty-btn">
                        Browse Recipes
                    </Link>
                </div>
            ) : (
                <>
                    <div className="fav-summary-banner">
                        <span className="fav-summary-text">
                            Saved Recipes: <strong>{favouriteRecipes.length}</strong>
                        </span>
                        <span className="fav-total-time">
                            Total Cooking Time: {totalCookingTime} mins
                        </span>
                    </div>

                    <div className="recipe-grid">
                        {favouriteRecipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                onToggleFavourite={onToggleFavourite}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Favourites;