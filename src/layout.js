export default function () {
  const mainContainer = document.querySelector("#container");

  const fillContainer = (content) => {
    mainContainer.appendChild(content);
  };

  const resetContainer = () => {
    mainContainer.replaceChildren();
  };

  const createTitleNode = (h1) => {
    const container = document.createElement("div");
    const header = document.createElement("h1");
    const headerText = document.createTextNode(h1);
    header.classList.add("title");
    header.appendChild(headerText);
    container.appendChild(header);
    return container;
  };

  const createSubtitleNode = (h2) => {
    const container = document.createElement("div");
    const header = document.createElement("h2");
    const headerText = document.createTextNode(h2);
    header.classList.add("subtitle");
    header.appendChild(headerText);
    container.appendChild(header);
    return container;
  };

  const createParagraphNode = (h3, p) => {
    const container = document.createElement("div");
    const header = document.createElement("h3");
    const content = document.createElement("p");
    const headerText = document.createTextNode(h3);
    const contentText = document.createTextNode(p);
    header.appendChild(headerText);
    content.appendChild(contentText);
    container.appendChild(header);
    container.appendChild(content);
    return container;
  };

  const createMenuItemNode = (h3, p, cost) => {
    const container = document.createElement("div");
    const header = document.createElement("h3");
    const content1 = document.createElement("p");
    const content2 = document.createElement("p");
    const headerText = document.createTextNode(h3);
    const content1Text = document.createTextNode(p);
    const content2Text = document.createTextNode(cost);
    header.appendChild(headerText);
    content1.appendChild(content1Text);
    content2.appendChild(content2Text);
    container.appendChild(header);
    container.appendChild(content1);
    container.appendChild(content2);
    return container;
  };

  return {
    fillContainer,
    resetContainer,
    createTitleNode,
    createSubtitleNode,
    createParagraphNode,
    createMenuItemNode,
  };
}
