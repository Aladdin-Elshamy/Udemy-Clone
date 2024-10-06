import { MdOutlineLanguage } from "react-icons/md";
import LinkBtn from "../elements/LinkBtn";
import { NavLink } from "react-router-dom";

export default function BtnLinks() {
  return (
    <li className="items-center lg:gap-3 md:gap-2 font-bold hidden md:flex flex-shrink">
      <NavLink
        to="/login"
        className="border font-bold border-black px-4 py-2 text-sm hover:opacity-70"
      >
        Log in
      </NavLink>
      <LinkBtn href="#" variant="black" align={"center"} width={"fit"}>
        Sign up
      </LinkBtn>
      <LinkBtn
        href="#"
        width={"fit"}
        align={"center"}
        variant="white"
        className="py-[8px] px-2"
      >
        <MdOutlineLanguage className="text-xl" />
      </LinkBtn>
    </li>
  );
}
