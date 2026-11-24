import { useState } from "react";
import { Routes, Route } from "react-router";
import recipesData from "./data/recipes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Favourites from "./pages/Favourites";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState(recipesData);

  // Toggle Favourite Action Function
  const handleToggleFavourite = (id) => {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === id
          ? { ...recipe, isFavourite: !recipe.isFavourite }
          : recipe
      )
    );
  };

  const favouritesCount = recipes.filter((r) => r.isFavourite).length;

  return (
    <div className="app-container">
      <Navbar favouritesCount={favouritesCount} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route
            path="/recipes"
            element={
              <Recipes
                recipes={recipes}
                onToggleFavourite={handleToggleFavourite}
              />
            }
          />
          <Route
            path="/recipes/:id"
            element={<RecipeDetails recipes={recipes} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                recipes={recipes}
                onToggleFavourite={handleToggleFavourite}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;