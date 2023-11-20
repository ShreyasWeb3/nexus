import logo from "../Assets/logo.png";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Avatar,
  WrapItem,
  Icon,
} from "@chakra-ui/react";
import { Search2Icon, ChevronDownIcon, BellIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#0D2847] h-14 flex items-center justify-between">
      <img className="h-[45px] w-[150px]" src={logo} alt="AAA company" />
      <Link to="/search">
        <div className="cursor-pointer">
          <InputGroup>
            <Input
              placeholder="Search"
              width="550px"
              backgroundColor="#FFFFFF2C"
            />
            <InputRightElement>
              <Search2Icon color="#FFFFFFAF" />
            </InputRightElement>
          </InputGroup>
        </div>
      </Link>
      <div className="flex items-center space-x-4 mr-5">
        <div style={{ position: "relative", display: "inline-block" }}>
          <BellIcon boxSize={6} color="white" />
          <Icon
            className="ml-[-12px] absolute"
            viewBox="0 0 200 200"
            color="red.500"
          >
            <path
              fill="currentColor"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
        </div>
        <WrapItem>
          <Avatar
            name="Kent Dodds"
            size="sm"
            src="https://bit.ly/kent-c-dodds"
          />
        </WrapItem>
        <p className="font-Lato text-white">Thoman Dean</p>
        <IconButton
          colorScheme="outline"
          fontSize="35px"
          aria-label="Search profile"
          icon={<ChevronDownIcon />}
        />
      </div>
    </div>
  );
};

export default Header;
