"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const DataContext_1 = require("../context/DataContext");
require("nodecloud-particleground");
require("./particles.scss");
function Particles({ setParticles }) {
    const { particles } = (0, react_1.useContext)(DataContext_1.DataContext);
    (0, react_1.useEffect)(() => {
        const element = document.getElementById('particles');
        const pg = window.particleground(element, particles);
        setParticles(element);
        return () => {
            pg.destroy();
            setParticles(null);
        };
    }, []);
    return React.createElement("div", { id: "particles", className: "particles hidden" });
}
exports.default = Particles;
