import dynamic from "next/dynamic";
import { Button } from "ui-base/Button";
import type { HeaderProps } from "remoteApp/Header";
import { HEADER_CONST } from "remoteApp/Header";

const TestPage = dynamic(() => import("remoteApp/pages/test"));
const Header = dynamic(() => import("remoteApp/Header"));

const x = HEADER_CONST.a;
const TestPages = () => {
  console.log("HEADER_CONST.a", HEADER_CONST.a);
  return (
    <div>
      <div>Spaceweb Docs Test Page</div>
      <Button>Spaceweb Docs Button</Button>
      <Header />
      <TestPage />
    </div>
  );
};

export default TestPages;
