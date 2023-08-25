import contactsData from "./data/aside/contacts.js";
import techSkillsData from "./data/aside/techSkills.js";
import softSkillsData from "./data/aside/softSkills.js";
import languagesData from "./data/aside/languages.js";

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
  return asideLink;
}

function createAsideText(elem) {
  const asideText = createElement({ tagName: "p", className: "aside__text" });
  asideText.textContent = elem.text;
  return asideText;
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
}

startApp();
