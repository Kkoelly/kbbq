import { recipes } from "./data.js";
import RecipeThumbnail from "./components/RecipeThumbnail.jsx";

function App() {
  return (
    <>
      <h1 style={{ color: "white", padding: "20px" }}>Recipes</h1>
      <content>
        {recipes.map((recipe) => (
          <RecipeThumbnail recipe={recipe} />
        ))}
      </content>
    </>
  );
}

export default App;
