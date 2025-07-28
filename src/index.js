import "./styles.css";
import LayoutHandler from "./layout.js";
import HomePage from "./home.js";
import MenuPage from "./menu.js";
import ContactPage from "./contact.js";

const main = () => {
  const layout = LayoutHandler();
  const home = HomePage();
  const menu = MenuPage();
  const contact = ContactPage();

  layout.resetContainer();
  home.onButtonClick();
  menu.onButtonClick();
  contact.onButtonClick();

  const displayInit = () => {
    const content = home.getContent();
    layout.fillContainer(content);
  };

  return { displayInit };
};

main().displayInit();
