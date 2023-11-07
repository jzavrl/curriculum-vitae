"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const DataContext_1 = require("../context/DataContext");
const react_markdown_1 = __importDefault(require("react-markdown"));
const baffle_1 = __importDefault(require("baffle"));
function Description({ name, showStory, toggleClasses }) {
    const { about } = (0, react_1.useContext)(DataContext_1.DataContext);
    (0, react_1.useEffect)(() => {
        // Store the original HTML for later. Baffle will flatten all elements
        // inside, meaning we lose any markup inside <p> such as <a>. So we store
        // the original her and replace it back once Baffle ends.
        const content = document.getElementById(name).cloneNode(true).innerHTML;
        (0, baffle_1.default)(document.querySelectorAll('#' + name + ' > p'), {
            characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"]
        }).start().reveal(1000);
        // Baffle doesn't have a callback function, so we use a timeout.
        setTimeout(() => {
            document.getElementById(name).innerHTML = content;
        }, 800);
        // Trigger window resize so waypoints gets the new positions.
        window.dispatchEvent(new Event('resize'));
    }, [showStory]);
    return (React.createElement("article", { id: name, className: toggleClasses(['description', name + '-description'], name) },
        React.createElement(react_markdown_1.default, null, about[name])));
}
exports.default = Description;
