import { Stack, IconButton, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { RiContactsBook2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { PiUserFocusLight } from "react-icons/pi";
import connect from "../Assets/connect logo.png";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const SidePanel = () => {
  const [expanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      {expanded ? (
        <div className="bg-[#003362] w-1/5 font-Lato h-screen">
          <div className="flex bg-[#111927]">
            <img
              className="w-[23px] h-[19px] mt-4 ml-4 mr-2"
              src={connect}
              alt="connect logo"
            />
            <h3 className=" text-white pt-4 ">CS Launchpad</h3>
            <Icon
              className=" mt-9 cursor-pointer relative inline-block top-[-25px] left-9"
              onClick={toggleExpansion}
              boxSize={8}
              color="white"
              as={IoIosArrowDropleftCircle}
            />
          </div>
          <Stack
            spacing="24px"
            color="white"
            className="px-4 py-5 h-full mt-[-12px]"
          >
            <p>
              <Icon className="mr-2" boxSize={6} as={PiUserFocusLight} />
              SAM
              <IconButton
                colorScheme="outline"
                fontSize="25px"
                className="ml-[92px]"
                aria-label="Search profile"
                icon={<ChevronDownIcon />}
              />
            </p>
            <p>
              <Icon className="mr-2" boxSize={6} as={CgProfile} />
              M
              <IconButton
                colorScheme="outline"
                fontSize="25px"
                className="ml-[113px]"
                aria-label="Search profile"
                icon={<ChevronDownIcon />}
              />
            </p>
            <p>
              <Icon className="mr-2" boxSize={6} as={RiContactsBook2Line} />
              CTS
              <IconButton
                colorScheme="outline"
                fontSize="25px"
                className="ml-[98px]"
                aria-label="Search profile"
                icon={<ChevronDownIcon />}
              />
            </p>
            <p>
              <Icon className="mr-2" boxSize={6} as={BiSolidBarChartAlt2} />
              Reports
              <IconButton
                colorScheme="outline"
                fontSize="25px"
                className="ml-[69px]"
                aria-label="Search profile"
                icon={<ChevronDownIcon />}
              />
            </p>

            <p>
              <Icon className="mr-2" boxSize={6} as={CiSettings} />
              Settings
              <IconButton
                colorScheme="outline"
                fontSize="25px"
                className="ml-[67px]"
                aria-label="Search profile"
                icon={<ChevronDownIcon />}
              />
            </p>
          </Stack>{" "}
        </div>
      ) : (
        <div className="bg-[#003362] w-[58px] h-screen">
          <div className="h-[1px] w-[1px] ">
            <Icon
              className="mr-2 ml-[35px] mt-2 cursor-pointer"
              onClick={toggleExpansion}
              boxSize={8}
              color="#111927"
              as={IoIosArrowDroprightCircle}
            />
          </div>
          <div className="bg-[#111927] h-7 w-7 m-[10px] rounded-sm">
            <img
              className="w-[20px] h-[27px] ml-[3px]  pt-[6px] pb-1"
              src={connect}
              alt="connect logo"
            />
          </div>

          <div>
            <Stack spacing="24px" color="white" className="mx-3">
              <Icon className="mr-2 mt-2" boxSize={6} as={PiUserFocusLight} />
              <Icon className="mr-2" boxSize={6} as={CgProfile} />
              <Icon className="mr-2" boxSize={6} as={RiContactsBook2Line} />
              <Icon className="mr-2" boxSize={6} as={RiContactsBook2Line} />
              <Icon className="mr-2" boxSize={6} as={BiSolidBarChartAlt2} />
              <Icon className="mr-2" boxSize={6} as={CiSettings} />
            </Stack>
          </div>
        </div>
      )}
    </>
  );
};

export default SidePanel;
