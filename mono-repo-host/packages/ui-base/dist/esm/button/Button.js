import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../contexts/ThemeProvider";
var Button = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var theme = useTheme();
    console.log("BUTTON THEME", theme);
    return _jsx("button", __assign({}, props, { children: children }));
};
export { Button };
