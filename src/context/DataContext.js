"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataWrapper = exports.DataContext = void 0;
const react_1 = require("react");
const skills_json_1 = __importDefault(require("../content/skills.json"));
const about_json_1 = __importDefault(require("../content/about.json"));
const sections_json_1 = __importDefault(require("../content/sections.json"));
const particles_json_1 = __importDefault(require("../content/particles.json"));
const parallax_json_1 = __importDefault(require("../content/parallax.json"));
const personal_json_1 = __importDefault(require("../content/personal.json"));
exports.DataContext = (0, react_1.createContext)({});
const DataWrapper = ({ children }) => {
    return (React.createElement(exports.DataContext.Provider, { value: {
            skills: skills_json_1.default,
            about: about_json_1.default,
            sections: sections_json_1.default,
            particles: particles_json_1.default,
            parallax: parallax_json_1.default,
            personal: personal_json_1.default
        } }, children));
};
exports.DataWrapper = DataWrapper;
