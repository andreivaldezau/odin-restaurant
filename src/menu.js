import LayoutHandler from "./layout.js";

export default function () {
  const layout = LayoutHandler();
  const title = "Menu";
  const subtitle1 = "Purr-fect Bites";
  const subtitle2 = "Meow-ns & Sweet Treats";
  const subtitle3 = "Sips & Whiskers";

  const getContent = () => {
    const content = document.createElement("div");
    const hr = document.createElement("hr");
    const headerNode = layout.createTitleNode(title);
    const subtitleNode1 = layout.createSubtitleNode(subtitle1);
    const subtitleNode2 = layout.createSubtitleNode(subtitle2);
    const subtitleNode3 = layout.createSubtitleNode(subtitle3);

    const entree1 = layout.createMenuItemNode(
      "Tuna Tango Toast",
      "Toasted sourdough topped with whipped tuna mousse, capers, and microgreens. Served with a drizzle of lemon aioli.",
      "$6.50"
    );
    const entree2 = layout.createMenuItemNode(
      "Whisker Fries",
      "Crispy sweet potato fries tossed in rosemary salt, served with “meow-nnaise” and spicy ketchup.",
      "$5.00"
    );
    const entree3 = layout.createMenuItemNode(
      "Cat-ch of the Day Quiche",
      "Daily rotating mini quiche inspired by coastal flavors (salmon, dill, leek, etc.).",
      "$8.00"
    );
    const mains1 = layout.createMenuItemNode(
      "The Tabby Toastie",
      "Grilled cheese sandwich with smoked gouda, caramelized onions, and tomato chutney. Comes with a side of meowster soup.",
      "$9.50"
    );
    const mains2 = layout.createMenuItemNode(
      "Paws-itively Pesto Pasta",
      "Spinach linguine with house-made basil pesto, cherry tomatoes, and pine nuts.",
      "$11.00"
    );
    const mains3 = layout.createMenuItemNode(
      "Catpaw Cream Puffs",
      "Fluffy choux pastries shaped like cat paws, filled with vanilla bean custard.",
      "$5.00"
    );
    const drink1 = layout.createMenuItemNode(
      "Catpuccino",
      "Classic cappuccino with a pawprint dusted in cinnamon.",
      "$4.00"
    );
    const drink2 = layout.createMenuItemNode(
      "Meow Matcha Latte",
      "Creamy matcha with vanilla oat milk and foam art of your favorite kitty.",
      "$4.50"
    );
    const drink3 = layout.createMenuItemNode(
      "Iced Catnip Tea",
      "Refreshing blend of spearmint, lemongrass, and catnip (yes, it's human-safe!).",
      "$3.50"
    );

    content.appendChild(headerNode);
    content.appendChild(hr);
    content.appendChild(subtitleNode1);
    content.appendChild(entree1);
    content.appendChild(entree2);
    content.appendChild(entree3);
    content.appendChild(subtitleNode2);
    content.appendChild(mains1);
    content.appendChild(mains2);
    content.appendChild(mains3);
    content.appendChild(subtitleNode3);
    content.appendChild(drink1);
    content.appendChild(drink2);
    content.appendChild(drink3);
    content.classList.add("content");
    return content;
  };

  const onButtonClick = () => {
    const button = document.querySelector("#menu");
    button.addEventListener("click", () => {
      layout.resetContainer();
      layout.fillContainer(getContent());
    });
  };

  return { onButtonClick };
}
