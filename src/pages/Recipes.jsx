import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes({ recipes, onToggleFavourite }) {
    const [selectedType, setSelectedType] = useState("All");
    const [sortBy, setSortBy] = useState("default");

    // Step 1: Type Filter
    let displayRecipes = recipes.filter((r) => {
        if (selectedType === "All") return true;
        return r.type === selectedType;
    });

    // Step 2: Sorting using copy ([...displayRecipes]) as per Assignment Special Rule
    if (sortBy === "low-to-high") {
        displayRecipes = [...displayRecipes].sort(
            (a, b) => a.cookingTime - b.cookingTime
        );
    } else if (sortBy === "high-to-low") {
        displayRecipes = [...displayRecipes].sort(
            (a, b) => b.cookingTime - a.cookingTime
        );
    }

    return (
        <div className="recipes-page">
            <div className="page-header">
                <h1 className="page-title">All Recipes</h1>
                <p className="page-subtitle">
                    Explore delicious recipes from various cuisines.
                </p>
            </div>

            <div className="controls-bar">
                <div className="filter-group">
                    <label className="filter-label">Filter by Type:</label>
                    <select
                        className="filter-select"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label className="filter-label">Sort by Cooking Time:</label>
                    <select
                        className="filter-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="low-to-high">Low → High</option>
                        <option value="high-to-low">High → Low</option>
                    </select>
                </div>
            </div>

            <div className="recipe-grid">
                {displayRecipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        onToggleFavourite={onToggleFavourite}
                    />
                ))}
            </div>
        </div>
    );
}

export default Recipes;