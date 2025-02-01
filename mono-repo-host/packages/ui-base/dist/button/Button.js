"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var ThemeProvider_1 = require("../contexts/ThemeProvider");
var Button = function (_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    var theme = (0, ThemeProvider_1.useTheme)();
    console.log("BUTTON THEME", theme);
    return (0, jsx_runtime_1.jsx)("button", tslib_1.__assign({}, props, { children: children }));
};
exports.Button = Button;
