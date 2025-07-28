import LayoutHandler from "./layout.js";

export default function () {
  const layout = LayoutHandler();
  const title = "Pancake's Cat Café";
  const hours =
    "Sunday: 8am - 8pm\n\
    Monday: 6am - 6pm\n\
    Tuesday: 6am - 6pm\n\
    Wednesday: 6am - 6pm\n\
    Thursday: 6am - 10pm\n\
    Friday: 6am - 10pm\n\
    Saturday: 8am - 10pm";
  const address = "123 Feline Drive, Catskill Mountains, New York";

  const getContent = () => {
    const content = document.createElement("div");
    const hr = document.createElement("hr");
    const headerNode = layout.createTitleNode(title);
    const hoursNode = layout.createParagraphNode("Hours", hours);
    const addressNode = layout.createParagraphNode("Address", address);
    content.appendChild(headerNode);
    content.appendChild(hr);
    content.appendChild(hoursNode);
    content.appendChild(addressNode);
    content.classList.add("content");
    return content;
  };

  const onButtonClick = () => {
    const button = document.querySelector("#home");
    button.addEventListener("click", () => {
      layout.resetContainer();
      layout.fillContainer(getContent());
    });
  };

  return { getContent, onButtonClick };
}
