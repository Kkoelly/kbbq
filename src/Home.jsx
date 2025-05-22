import { recipes } from "./data.js";
import RecipeThumbnail from "./components/RecipeThumbnail.jsx";

function Home() {
  return (
    <>
      <h1 className="header">KBBQ Recipes</h1>
      <content>
        {recipes.map((recipe) => (
          <RecipeThumbnail recipe={recipe} />
        ))}
      </content>
    </>
  );
}

export default Home;
