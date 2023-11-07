"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const profile_webp_1 = __importDefault(require("../../assets/images/profile.webp"));
const SectionTitle_1 = __importDefault(require("../SectionTitle"));
const Section_1 = __importDefault(require("../section/Section"));
const Story_1 = __importDefault(require("../Story"));
const DataContext_1 = require("../../context/DataContext");
require("./bio.scss");
function Bio() {
    const { sections: { bio } } = (0, react_1.useContext)(DataContext_1.DataContext);
    const { personal } = (0, react_1.useContext)(DataContext_1.DataContext);
    return (react_1.default.createElement(Section_1.default, { id: 'bio' },
        react_1.default.createElement("article", { className: "content" },
            react_1.default.createElement("div", { className: "left" },
                react_1.default.createElement("div", { className: "profile" },
                    react_1.default.createElement("img", { src: profile_webp_1.default, title: "Jan Zavrl", alt: "Jan Zavrl" }))),
            react_1.default.createElement("div", { className: "right" },
                react_1.default.createElement(SectionTitle_1.default, { title: bio.title, description: bio.description }),
                react_1.default.createElement("div", { className: "info" },
                    react_1.default.createElement("div", { className: "personal" },
                        react_1.default.createElement("ul", null,
                            react_1.default.createElement("li", null,
                                "new ",
                                react_1.default.createElement("strong", null, personal.personal.title),
                                "(["),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("ul", null, Object.entries(personal.personal.content).map(([key, data]) => {
                                    return react_1.default.createElement("li", null,
                                        "'",
                                        key,
                                        "' => '",
                                        data,
                                        "',");
                                }))),
                            react_1.default.createElement("li", null,
                                "])->",
                                react_1.default.createElement("strong", null, personal.skills.title),
                                "(["),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("ul", null, Object.entries(personal.skills.content).map(([key, data]) => {
                                    return react_1.default.createElement("li", null,
                                        "'",
                                        key,
                                        "' => ",
                                        data,
                                        ",");
                                }))),
                            react_1.default.createElement("li", null, "]);"))),
                    react_1.default.createElement("div", { className: "contact" },
                        react_1.default.createElement("ul", null,
                            react_1.default.createElement("li", null,
                                "new ",
                                react_1.default.createElement("strong", null, personal.contact.title),
                                "(["),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("ul", null, Object.entries(personal.contact.content).map(([key, data]) => {
                                    return react_1.default.createElement("li", null,
                                        "'",
                                        key,
                                        "' => ",
                                        react_1.default.createElement("a", { href: data.link, target: "_blank" },
                                            "'",
                                            data.title,
                                            "'"),
                                        ",");
                                }))),
                            react_1.default.createElement("li", null, "]);"))))),
            react_1.default.createElement(Story_1.default, null))));
}
exports.default = Bio;
