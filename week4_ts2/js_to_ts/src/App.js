"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const converter_1 = __importDefault(require("./components/converter/converter"));
const react_1 = __importDefault(require("react"));
const App = () => {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(converter_1.default, null)));
};
exports.default = App;
