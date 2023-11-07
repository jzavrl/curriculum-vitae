"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Switcher({ toggleClasses, setShowStory }) {
    const handleClick = ({ target }) => setShowStory(target.name);
    return (React.createElement("ul", { id: "switcher", className: "switcher" },
        React.createElement("li", null,
            React.createElement("button", { name: "short", className: toggleClasses(['button'], 'short'), onClick: handleClick }, "very short on me")),
        React.createElement("li", null,
            React.createElement("button", { name: "long", className: toggleClasses(['button'], 'long'), onClick: handleClick }, "not so short on me "))));
}
exports.default = Switcher;
