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
const oval_blue_svg_1 = __importDefault(require("../../assets/images/oval-blue.svg"));
const splash_webp_1 = __importDefault(require("../../assets/images/splash.webp"));
const parallax_js_1 = __importDefault(require("parallax-js"));
const DataContext_1 = require("../../context/DataContext");
require("./hero.scss");
const react_waypoint_1 = require("react-waypoint");
const Particles_1 = __importDefault(require("../Particles"));
function Hero() {
    const { parallax } = (0, react_1.useContext)(DataContext_1.DataContext);
    const [particles, setParticles] = (0, react_1.useState)(null);
    const handleClick = () => {
        document.getElementById('bio').scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, react_1.useEffect)(() => {
        const scene = new parallax_js_1.default(document.getElementById('parallax'), parallax);
        return () => scene.destroy();
    }, []);
    const handleWaypointEnter = () => {
        particles === null || particles === void 0 ? void 0 : particles.classList.add('hidden');
    };
    const handleWaypointLeave = () => {
        particles === null || particles === void 0 ? void 0 : particles.classList.remove('hidden');
    };
    return (react_1.default.createElement(react_waypoint_1.Waypoint, { onEnter: handleWaypointEnter, onLeave: handleWaypointLeave, topOffset: "60%" },
        react_1.default.createElement("div", { className: "hero-wrapper" },
            react_1.default.createElement("section", { id: "hero", className: "section hero" },
                react_1.default.createElement("ul", { id: "parallax", className: "parallax" },
                    react_1.default.createElement("li", { className: "layer top-container", "data-depth": "0.20" },
                        react_1.default.createElement("span", { className: "top" }, "Hello, I'm")),
                    react_1.default.createElement("li", { className: "layer title-container", "data-depth": "0.30" },
                        react_1.default.createElement("h1", { className: "title" }, "Jan Zavrl")),
                    react_1.default.createElement("li", { className: "layer bottom-container", "data-depth": "0.20" },
                        react_1.default.createElement("span", { className: "bottom" }, "and I solve digital problems")),
                    react_1.default.createElement("li", { className: "layer oval-container", "data-depth": "0.15" },
                        react_1.default.createElement("img", { className: "oval", src: oval_blue_svg_1.default, alt: "oval gradient" })),
                    react_1.default.createElement("li", { className: "layer splash-container", "data-depth": "0.10" },
                        react_1.default.createElement("img", { className: "splash", src: splash_webp_1.default, alt: "splash visual" }))),
                react_1.default.createElement("button", { className: "button", onClick: handleClick }, "let me show you what I am all about")),
            react_1.default.createElement(Particles_1.default, { setParticles: setParticles }))));
}
exports.default = Hero;
