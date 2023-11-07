"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WaypointBaffle_1 = __importDefault(require("./WaypointBaffle"));
function Skill({ title, technologies }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "skill" }, title),
        react_1.default.createElement(WaypointBaffle_1.default, null,
            react_1.default.createElement("div", { className: "detailed" }, technologies.join(', ')))));
}
exports.default = Skill;
