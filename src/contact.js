import LayoutHandler from "./layout.js";

export default function () {
  const layout = LayoutHandler();
  const title = "Contact Us";

  const getContent = () => {
    const content = document.createElement("div");
    const hr = document.createElement("hr");
    const headerNode = layout.createTitleNode(title);
    const contactNode = layout.createParagraphNode(
      "Pancake",
      "Manager\n\
      555-555-5555\n\
      pancake@example.com"
    );

    content.appendChild(headerNode);
    content.appendChild(hr);
    content.appendChild(contactNode);
    content.classList.add("content");
    return content;
  };

  const onButtonClick = () => {
    const button = document.querySelector("#contact");
    button.addEventListener("click", () => {
      layout.resetContainer();
      layout.fillContainer(getContent());
    });
  };

  return { onButtonClick };
}
