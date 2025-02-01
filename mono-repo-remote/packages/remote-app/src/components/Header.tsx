import { UserProfile } from "./UserProfile";

export enum HEADER_CONST {
  a = 1,
  b = 2,
  c = 3,
}
export type HeaderProps = {
  disabled: boolean;
};

const Header = () => {
  return (
    <div>
      Header from docs-app <UserProfile />
    </div>
  );
};

export default Header;
