"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Section_1 = __importDefault(require("../section/Section"));
const SectionTitle_1 = __importDefault(require("../SectionTitle"));
const Skill_1 = __importDefault(require("../Skill"));
const DataContext_1 = require("../../context/DataContext");
require("./skills.scss");
function Skills() {
    const { skills, sections } = (0, react_1.useContext)(DataContext_1.DataContext);
    return (React.createElement(Section_1.default, { id: 'skills' },
        React.createElement("article", { className: "content" },
            React.createElement(SectionTitle_1.default, { title: sections.skills.title, description: sections.skills.description }),
            React.createElement("ul", { className: "skill-list" }, Object.entries(skills).map(([skill, technologies]) => {
                return React.createElement("li", null,
                    React.createElement(Skill_1.default, { title: skill, technologies: technologies }));
            })))));
}
exports.default = Skills;
