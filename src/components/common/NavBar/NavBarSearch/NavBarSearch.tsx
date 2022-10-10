import {
  NavBarSearchContainer,
  NavBarSearchIcon,
  NavBarSearchInput,
} from "./style";
import { HiOutlineSearch } from "@react-icons/all-files/hi/HiOutlineSearch";

const NavBarSearch = () => {
  return (
    <NavBarSearchContainer>
      <NavBarSearchIcon>
        <HiOutlineSearch />
      </NavBarSearchIcon>
      <NavBarSearchInput placeholder="검색해주세요" />
    </NavBarSearchContainer>
  );
};

export default NavBarSearch;
