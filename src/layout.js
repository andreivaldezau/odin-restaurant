export default function () {
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

  return { createTitleNode, createSubtitleNode, createParagraphNode };
}
