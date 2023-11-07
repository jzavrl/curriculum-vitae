"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = __importDefault(require("./components/sections/Hero"));
const Bio_1 = __importDefault(require("./components/sections/Bio"));
const Skills_1 = __importDefault(require("./components/sections/Skills"));
const Footer_1 = __importDefault(require("./components/sections/Footer"));
const DataContext_1 = require("./context/DataContext");
require("./assets/sass/core/core.scss");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(DataContext_1.DataWrapper, null,
            React.createElement(Hero_1.default, null),
            React.createElement(Bio_1.default, null),
            React.createElement(Skills_1.default, null),
            React.createElement(Footer_1.default, null))));
}
exports.default = App;
