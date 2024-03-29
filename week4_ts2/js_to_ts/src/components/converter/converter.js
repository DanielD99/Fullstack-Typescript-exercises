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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./converter.css");
const Converter = () => {
    const [temperature, setTemperature] = (0, react_1.useState)(0);
    const update = (event) => {
        const fahrenheit = parseFloat(event.target.value);
        const celcius = (fahrenheit - 32) * 5 / 9;
        setTemperature(celcius);
    };
    return (react_1.default.createElement("div", { className: "greenborder" },
        react_1.default.createElement(FahrenheitComponent, { update: update }),
        react_1.default.createElement(CelsiusComponent, { temperature: temperature })));
};
const FahrenheitComponent = ({ update }) => {
    return (react_1.default.createElement("div", { className: "redborder" },
        react_1.default.createElement("input", { type: "text", onChange: update, placeholder: "Enter temperature in fahrenheit" })));
};
const CelsiusComponent = ({ temperature }) => {
    return (react_1.default.createElement("div", { className: "blueborder" },
        "Temperature in Celcius:",
        temperature.toFixed(2),
        temperature));
};
exports.default = Converter;
