import contactsData from "./data/aside/contacts.js";
import techSkillsData from "./data/aside/techSkills.js";
import softSkillsData from "./data/aside/softSkills.js";
import languagesData from "./data/aside/languages.js";
import summaryData from "./data/main/summary.js";
import projectExperienceData from "./data/main/projects.js";
import workExperienceData from "./data/main/experience.js";
import educationData from "./data/main/education.js";

const contactsElement = document.getElementById("contacts");
const techSkillsElement = document.getElementById("tech-skills");
const softSkillsElement = document.getElementById("soft-skills");
const languagesElement = document.getElementById("languages");
const summaryElement = document.getElementById("summary");
const projectExperienceElement = document.getElementById("project-experience");
const workExperienceElement = document.getElementById("work-experience");
const educationElement = document.getElementById("education");

function createElement(e) {
  const { tagName, className, attributes } = e;
  const element = document.createElement(tagName);

  if (className) {
    const classNames = className.split(" ").filter(Boolean);
    element.classList.add(...classNames);
  }

  if (attributes) {
    Object.keys(attributes).forEach((key) =>
      element.setAttribute(key, attributes[key])
    );
  }

  return element;
}

function createAsideLink(elem) {
  const item = createElement({ tagName: "li" });
  const asideLink = createElement({
    tagName: "a",
    className: "aside__link",
    attributes: {
      href: elem.link,
      rel: "noopener nofollow noreferrer",
      target: "_blank",
    },
  });
  asideLink.textContent = elem.text;
  item.append(asideLink);
  return item;
}

function createAsideText(elem) {
  const item = createElement({ tagName: "li" });
  const asideText = createElement({ tagName: "p", className: "aside__text" });
  asideText.textContent = elem.text;
  item.append(asideText);
  return item;
}

function createContentLink(elem) {
  const contentLink = createElement({
    tagName: "a",
    className: elem.class ? `content__link ${elem.class}` : "content__link",
    attributes: {
      href: elem.link,
      rel: "noopener nofollow noreferrer",
      target: "_blank",
    },
  });
  contentLink.textContent = elem.text;
  return contentLink;
}

function createContentText(text) {
  const contentText = createElement({
    tagName: "span",
    className: "content__text",
  });
  contentText.textContent = text;
  return contentText;
}

function createProject(elem) {
  return `<div class="project__wrapper">
    <a href="${
      elem.title.link
    }" class="content__link accent" rel: "noopener nofollow noreferrer",
      target: "_blank">${elem.title.text}</a>
      (${elem.repositories
        .map(
          (
            repo
          ) => `<a href="${repo.link}" class="content__link" rel: "noopener nofollow noreferrer",
      target: "_blank">${repo.text}</a>`
        )
        .join(", ")})
        <p class="content__text">${elem.technologies}</p>
        ${elem.description
          .map((desc) => ` <p class="content__text">${desc}</p>`)
          .join(" ")}
    </div>`;
}

function startApp() {
  const contacts = contactsData.map((elem) => {
    if (elem.link) {
      return createAsideLink(elem);
    }
    return createAsideText(elem);
  });
  contactsElement.append(...contacts);

  const techSkills = techSkillsData.map((elem) => {
    return createAsideText({ text: elem });
  });
  techSkillsElement.append(...techSkills);

  const softSkills = softSkillsData.map((elem) => {
    return createAsideText({ text: elem });
  });
  softSkillsElement.append(...softSkills);

  const languages = languagesData.map((elem) => {
    return createAsideText({ text: elem });
  });
  languagesElement.append(...languages);

  summaryElement.textContent = summaryData;

  const projectExperience = projectExperienceData.map((elem) => {
    return createProject(elem);
  });
  projectExperienceElement.innerHTML = projectExperience.join(" ");
}

startApp();
