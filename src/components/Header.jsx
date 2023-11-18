import React from "react";
import logo from "../Assets/logo.png";
import profile from "../Assets/user.png";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Search2Icon, ChevronDownIcon, BellIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <div className="bg-[#003362] h-20 flex items-center justify-between">
      <img className="h-[45px] w-[150px]" src={logo} alt="AAA company" />
      <div>
        <InputGroup>
          <Input placeholder="Search" width='550px' backgroundColor='#FFFFFF2C'/>
          <InputRightElement>
            <Search2Icon color="#FFFFFFAF" />
          </InputRightElement>
        </InputGroup>
      </div>
      <div className="flex items-center space-x-4 mr-5">
        <BellIcon boxSize={6} color="white" />
        <img className="h-[25px] w-[25px]" src={profile} alt="profile icon" />
        <p className="font-Lato text-white">Thoman Dean</p>
        <IconButton
          colorScheme="outline"
          fontSize='35px'
          aria-label="Search profile"
          icon={<ChevronDownIcon />}
        />
      </div>
    </div>
  );
};

export default Header;
