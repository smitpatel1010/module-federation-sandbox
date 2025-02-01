"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = exports.useTheme = void 0;
var react_1 = require("react");
var ThemeContext = (0, react_1.createContext)("light");
exports.ThemeContext = ThemeContext;
var useTheme = function () { return (0, react_1.useContext)(ThemeContext); };
exports.useTheme = useTheme;
