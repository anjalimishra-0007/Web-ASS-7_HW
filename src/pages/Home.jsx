import { Link } from "react-router";

function Home({ recipes }) {
    const totalRecipes = recipes.length;
    const vegRecipes = recipes.filter((r) => r.type === "Veg").length;
    const favRecipes = recipes.filter((r) => r.isFavourite).length;

    return (
        <div className="home-page">
            <div className="home-hero">
                <span className="hero-badge">Welcome to Recipe Book</span>
                <h1 className="hero-title">Discover & Cook Delicious Recipes</h1>
                <p className="hero-subtitle">
                    Browse through our curated collection of recipes, filter by dietary
                    preferences, and save your favourite dishes for quick access.
                </p>
                <Link to="/recipes" className="hero-cta">
                    Explore All Recipes →
                </Link>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">📖</div>
                    <div className="stat-number">{totalRecipes}</div>
                    <div className="stat-label">Total Recipes</div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">🥗</div>
                    <div className="stat-number">{vegRecipes}</div>
                    <div className="stat-label">Veg Recipes</div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">❤️</div>
                    <div className="stat-number">{favRecipes}</div>
                    <div className="stat-label">Favourite Recipes</div>
                </div>
            </div>
        </div>
    );
}

export default Home;