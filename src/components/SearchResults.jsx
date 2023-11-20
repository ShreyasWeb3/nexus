import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Icon,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchResults = () => {
  return (
    <div className="h-screen w-full font-Lato m-6">
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="#0090FF" href="#">
              Search Result
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Heading size="lg" className="font-Lato my-6">
        Search Results for "Winston, Benjamin"
      </Heading>
      <Tabs defaultIndex={0}>
        <TabList color="#7B7B7B">
          <Tab>SEARCH RESULT (5)</Tab>
          <Tab>RECENT SEARCHES</Tab>
          <Tab>RECENT CUSTOMERS</Tab>
          <Tab>BRAND QUEUE</Tab>
          <Tab>ADVANCED SEARCH</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2.5px"
          bg="#0090FF"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Box
              boxShadow="xl"
              borderRadius="md"
              className=""
              bg="white"
              w="100%"
              p={4}
              color="white"
            >
              <Stack
                direction="row"
                flex="1"
                justifyContent="space-between"
                spacing={8}
                align="center"
              >
                <Text size="xs" color="black">
                  10 results per page
                </Text>
                <Stack direction="row" spacing={8} align="center">
                  <div>
                    <InputGroup>
                      <Input
                        placeholder="Benjamin Winston"
                        color="black"
                        width="300px"
                      />
                      <InputRightElement>
                        <Search2Icon color="#0090FF" />
                      </InputRightElement>
                    </InputGroup>
                  </div>{" "}
                  <Link to="/editmember">
                    <Button className="p-2" colorScheme="blue">
                      Add Customer
                    </Button>
                  </Link>
                </Stack>
              </Stack>

              <TableContainer className="py-7">
                <Table color="black" variant="simple">
                  <Thead>
                    <Tr>
                      <Th>
                        Member ID{" "}
                        <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        Type <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        Status <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        First Name{" "}
                        <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        Last Name{" "}
                        <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        Address{" "}
                        <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        City <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        State <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>9801282</Td>
                      <Td>
                        <Button
                          color="orange.600"
                          backgroundColor="#FFE0C2"
                          borderRadius="sm"
                        >
                          PREMIER RV
                        </Button>
                      </Td>
                      <Td>
                        <Icon
                          viewBox="0 0 200 200"
                          color="red.500"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Cancelled
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>1006 A St</Td>
                      <Td>Minnepolis</Td>
                      <Td>MN</Td>
                    </Tr>
                    <Tr>
                      <Td>9801652</Td>
                      <Td>
                        <Button
                          color="red.600"
                          backgroundColor="#FFD1D9"
                          borderRadius="sm"
                        >
                          Classic
                        </Button>
                      </Td>
                      <Td>
                        {" "}
                        <Icon
                          viewBox="0 0 200 200"
                          color="orange.500"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Pending
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>3116 Ja St</Td>
                      <Td>Princeton</Td>
                      <Td>AZ</Td>
                    </Tr>
                    <Tr>
                      <Td>9883682</Td>
                      <Td>
                        <Button
                          color="blue.600"
                          backgroundColor="#C2E6FF"
                          borderRadius="sm"
                        >
                          Plus RV
                        </Button>
                      </Td>
                      <Td>
                        {" "}
                        <Icon
                          viewBox="0 0 200 200"
                          color="gray.400"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Draft
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>587 Ron St</Td>
                      <Td>Princeton</Td>
                      <Td>TX</Td>
                    </Tr>{" "}
                    <Tr>
                      <Td>9801735</Td>
                      <Td>
                        <Button
                          color="yellow.600"
                          backgroundColor="#F6EEB4"
                          borderRadius="sm"
                        >
                          Plus
                        </Button>
                      </Td>
                      <Td>
                        {" "}
                        <Icon
                          viewBox="0 0 200 200"
                          color="green.500"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Active
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>28 Pear St</Td>
                      <Td>Minnepolis</Td>
                      <Td>ME</Td>
                    </Tr>{" "}
                    <Tr>
                      <Td>9854382</Td>
                      <Td>
                        <Button
                          color="sky.600"
                          backgroundColor="#C2F3FF"
                          borderRadius="sm"
                        >
                          Premier
                        </Button>
                      </Td>
                      <Td>
                        {" "}
                        <Icon
                          viewBox="0 0 200 200"
                          color="orange.500"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Pending
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>897 Ave St</Td>
                      <Td>Minnepolis</Td>
                      <Td>ME</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Button
                flex="1"
                justifySelf="flex-end"
                colorScheme="teal"
                variant="outline"
                align="right"
              >
                Close
              </Button>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              boxShadow="xl"
              borderRadius="md"
              className=""
              bg="white"
              w="100%"
              p={4}
              color="white"
            >
              <Stack
                direction="row"
                flex="1"
                justifyContent="space-between"
                spacing={8}
                align="center"
              >
                <Text size="xs" color="black">
                  10 results per page
                </Text>
                <Stack direction="row" spacing={8} align="center">
                  <div>
                    <InputGroup>
                      <Input
                        placeholder="Benjamin Winston"
                        color="black"
                        width="300px"
                      />
                      <InputRightElement>
                        <Search2Icon color="#0090FF" />
                      </InputRightElement>
                    </InputGroup>
                  </div>{" "}
                  <Link to="/editmember">
                    <Button className="p-2" colorScheme="blue">
                      Add Customer
                    </Button>
                  </Link>
                </Stack>
              </Stack>

              <TableContainer className="py-7">
                <Table color="black" variant="simple">
                  <Thead>
                    <Tr>
                      <Th>
                        Member ID{" "}
                        <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        Type <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        Status <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        First Name{" "}
                        <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        Last Name{" "}
                        <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        Address{" "}
                        <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        City <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                      <Th>
                        State <Icon className="mr-2" boxSize={4} as={FaSort} />
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>9801282</Td>
                      <Td>
                        <Button
                          color="orange.600"
                          backgroundColor="#FFE0C2"
                          borderRadius="sm"
                        >
                          PREMIER RV
                        </Button>
                      </Td>
                      <Td>
                        <Icon
                          viewBox="0 0 200 200"
                          color="red.500"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Cancelled
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>1006 A St</Td>
                      <Td>Minnepolis</Td>
                      <Td>MN</Td>
                    </Tr>
                    <Tr>
                      <Td>9801652</Td>
                      <Td>
                        <Button
                          color="red.600"
                          backgroundColor="#FFD1D9"
                          borderRadius="sm"
                        >
                          Classic
                        </Button>
                      </Td>
                      <Td>
                        {" "}
                        <Icon
                          viewBox="0 0 200 200"
                          color="orange.500"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Pending
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>3116 Ja St</Td>
                      <Td>Princeton</Td>
                      <Td>AZ</Td>
                    </Tr>
                    <Tr>
                      <Td>9883682</Td>
                      <Td>
                        <Button
                          color="blue.600"
                          backgroundColor="#C2E6FF"
                          borderRadius="sm"
                        >
                          Plus RV
                        </Button>
                      </Td>
                      <Td>
                        {" "}
                        <Icon
                          viewBox="0 0 200 200"
                          color="gray.400"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Draft
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>587 Ron St</Td>
                      <Td>Princeton</Td>
                      <Td>TX</Td>
                    </Tr>{" "}
                    <Tr>
                      <Td>9801735</Td>
                      <Td>
                        <Button
                          color="yellow.600"
                          backgroundColor="#F6EEB4"
                          borderRadius="sm"
                        >
                          Plus
                        </Button>
                      </Td>
                      <Td>
                        {" "}
                        <Icon
                          viewBox="0 0 200 200"
                          color="green.500"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Active
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>28 Pear St</Td>
                      <Td>Minnepolis</Td>
                      <Td>ME</Td>
                    </Tr>{" "}
                    <Tr>
                      <Td>9854382</Td>
                      <Td>
                        <Button
                          color="sky.600"
                          backgroundColor="#C2F3FF"
                          borderRadius="sm"
                        >
                          Premier
                        </Button>
                      </Td>
                      <Td>
                        {" "}
                        <Icon
                          viewBox="0 0 200 200"
                          color="orange.500"
                          paddingRight="1"
                        >
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                        Pending
                      </Td>
                      <Td>Benjamin</Td>
                      <Td>Winston</Td>
                      <Td>897 Ave St</Td>
                      <Td>Minnepolis</Td>
                      <Td>ME</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Button
                flex="1"
                justifySelf="flex-end"
                colorScheme="teal"
                variant="outline"
                align="right"
              >
                Close
              </Button>
            </Box>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default SearchResults;
