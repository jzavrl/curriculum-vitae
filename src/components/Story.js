"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const oval_gray_svg_1 = __importDefault(require("../assets/images/oval-gray.svg"));
const Switcher_1 = __importDefault(require("./Switcher"));
const Description_1 = __importDefault(require("./Description"));
function Story() {
    const [showStory, setShowStory] = (0, react_1.useState)('short');
    /**
     *
     * @param existing
     * @param type
     * @returns {string}
     */
    const toggleClasses = (existing = [], type) => {
        return [...existing, showStory === type && 'active'].filter(Boolean).join(' ');
    };
    return (React.createElement("div", { className: "story" },
        React.createElement(Switcher_1.default, { toggleClasses: toggleClasses, setShowStory: setShowStory }),
        React.createElement(Description_1.default, { name: "short", showStory: showStory, toggleClasses: toggleClasses }),
        React.createElement(Description_1.default, { name: "long", showStory: showStory, toggleClasses: toggleClasses }),
        React.createElement("img", { className: "oval", src: oval_gray_svg_1.default, alt: "oval gradient" })));
}
exports.default = Story;
