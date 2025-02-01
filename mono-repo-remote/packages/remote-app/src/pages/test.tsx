import { Button } from "ui-base/button";
import { useTheme } from "ui-base/contexts/ThemeProvider";

const TestPage = () => {
  console.log("TEST PAGE THEME", useTheme());
  return (
    <div>
      <Button>Test Page</Button>
    </div>
  );
};

export default TestPage;
