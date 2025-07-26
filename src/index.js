import "./styles.css";
import HomePage from "./home.js";

const main = () => {
  const container = document.querySelector("#container");

  const displayHome = () => {
    const home = HomePage();
    const content = home.getContent();
    container.appendChild(content);
  };

  return { displayHome };
};

main().displayHome();
