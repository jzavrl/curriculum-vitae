"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oval_gray_svg_1 = __importDefault(require("../assets/images/oval-gray.svg"));
const WaypointBaffle_1 = __importDefault(require("./WaypointBaffle"));
function SectionTitle({ title, description }) {
    return (React.createElement("div", { className: "section-title" },
        React.createElement("h1", { className: "title" }, title),
        React.createElement(WaypointBaffle_1.default, null,
            React.createElement("h2", { className: "bottom" }, description)),
        React.createElement("img", { className: "oval", src: oval_gray_svg_1.default, alt: "oval gradient" })));
}
exports.default = SectionTitle;
