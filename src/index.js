import "./styles.css";
import Layout from "./layout.js";
import HomePage from "./home.js";

const main = () => {
  const layout = Layout();
  const home = HomePage();

  layout.resetContainer();
  home.onButtonClick();

  const displayInit = () => {
    const content = home.getContent();
    layout.fillContainer(content);
  };

  return { displayInit };
};

main().displayInit();
