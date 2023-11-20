import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Card,
  CardBody,
  Icon,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaUserPen } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className=" w-full font-Lato m-6">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">
                <BreadcrumbLink>Home</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <Link to="/">
                <BreadcrumbLink color="#0090FF">Launchpad</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Heading className="font-Lato my-6">Welcome back, Thomas</Heading>
        <Text fontSize="xl">What would you like to do?</Text>
        <SimpleGrid
          className="mt-10"
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          <Link to="/editmember">
            <Card align="center" className="hover:bg-[#104D87] hover:text-white">
              <CardBody>
                <Stack spacing="3">
                  <Icon
                    flex="1"
                    alignSelf="center"
                    boxSize={8}
                    color="#0090FF"
                    as={FaUserPen}
                  />
                  <Heading size="md">Update Member</Heading>
                  <Text>Edit membership details</Text>
                </Stack>
              </CardBody>
            </Card>
          </Link>
          <Card align="center" className="hover:bg-[#104D87] hover:text-white cursor-not-allowed">
            <CardBody>
              <Stack spacing="3">
                <Icon
                  flex="1"
                  alignSelf="center"
                  className=""
                  boxSize={8}
                  color="#0090FF"
                  as={IoBulbOutline}
                />
                <Heading size="md">Opportunities</Heading>
                <Text>View existing opportunities</Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </div>
    </>
  );
};

export default LandingPage;
