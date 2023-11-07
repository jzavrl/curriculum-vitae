"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./section.scss");
function Section({ id, children }) {
    const classes = ['section'];
    return (React.createElement("section", { id: id, className: [id, ...classes].join(' ') }, children));
}
exports.default = Section;
