import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex h-10 justify-between">
      <p>home</p> <p>resume</p>
    </div>
  );
};

export default Navbar;
