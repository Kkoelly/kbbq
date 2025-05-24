import { recipes } from "./data.js";
import RecipeThumbnail from "./components/RecipeThumbnail.jsx";

function Home() {
  return (
    <>
      <div className="header">
        <img className="flag_icon" src="images/korea_flag.jpg" />
        <span>KBBQ Recipes</span>
        <img className="flag_icon" src="images/korea_flag.jpg" />
      </div>
      <content>
        {recipes.map((recipe) => {
          return <RecipeThumbnail recipe={recipe} />;
        })}
      </content>
    </>
  );
}

export default Home;
