import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Stack,
  Box,
  Input,
  Button,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  Select,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const steps = [
  { title: "Create Customer" },
  { title: "Create Member" },
  { title: "Membership Summary" },
  { title: "Payment" },
  { title: "Completion" },
];

const EditMember = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <div className=" w-full font-Lato m-6">
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/">
              <BreadcrumbLink>M</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Maintainance</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="#0090FF" href="#">
              Membership
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Stack
        direction="row"
        spacing={8}
        align="center"
        flex="1"
        justifyContent="space-between"
      >
        <Heading size="lg" className="font-Lato my-6">
          Add a New Member
        </Heading>
        <div>
          <Button className="p-2 m-4" colorScheme="blue">
            Save as Draft
          </Button>
          <Link to="/">
            <Button
              flex="1"
              justifySelf="flex-end"
              colorScheme="teal"
              variant="outline"
              align="right"
            >
              Close
            </Button>
          </Link>
        </div>
      </Stack>

      <Box
        boxShadow="xl"
        borderRadius="md"
        className=""
        bg="white"
        w="100%"
        px={8}
        m={4}
        py={10}
        // color="white"
      >
        <Stack>
          <Stepper index={activeStep} size="sm" colorScheme="green" alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
                <Text>
                  <b>{step.title}</b>
                </Text>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Stack>
      </Box>
      <Box
        boxShadow="xl"
        borderRadius="md"
        className=""
        bg="white"
        w="100%"
        m={4}
        p={6}
        // color="white"
      >
        <Heading size="sm" pb="7">
          Customer Information
        </Heading>
        <Stack direction="row" spacing={8} align="center">
          <FormControl isRequired w={300}>
            <FormLabel>FIRST NAME</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl w={300}>
            <FormLabel>MIDDLE NAME</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl isRequired w={300}>
            <FormLabel>LAST NAME</FormLabel>
            <Input type="text" />
          </FormControl>
        </Stack>
        <Stack direction="row" py={4} spacing={8} align="center">
          <FormControl isRequired w={300}>
            <FormLabel>DATE OF BIRTH</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl w={300}>
            <FormLabel>PREFFERED NAME</FormLabel>
            <Input type="text" />
          </FormControl>
          <Checkbox>Use on Card</Checkbox>
          <Checkbox>Use on Mail</Checkbox>
        </Stack>
        <HStack py={4} spacing={8}>
          <FormControl w={300}>
            <FormLabel>Marital Status</FormLabel>
            <Select w={300}>
              <option value="option1">Married</option>
              <option value="option2">Single</option>
              <option value="option3">Do not want to disclose</option>
            </Select>
          </FormControl>
          <FormControl w={300}>
            <FormLabel>Preffered Language</FormLabel>
            <Select placeholder="English" w={300}>
              <option value="option1">English</option>
              <option value="option2">French</option>
              <option value="option3">German</option>
            </Select>
          </FormControl>
        </HStack>

        <Heading size="sm" py="7">
          Customer Information
        </Heading>
        <Stack direction="row" spacing={8} align="center">
          <FormControl isRequired w={300}>
            <FormLabel>PHONE NUMBER</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl isRequired w={300}>
            <FormLabel>EXTENSION</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl isRequired w={300}>
            <FormLabel>TYPE</FormLabel>

            <Select placeholder="Primary" w={300}>
              <option value="option1">Primary</option>
              <option value="option2">Secondary</option>\{" "}
            </Select>
          </FormControl>
        </Stack>
        <HStack py={4} spacing={8}>
          <FormControl isRequired w={635}>
            <FormLabel>EMAIL ADDRESS</FormLabel>
            <Input type="email" value={input} onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired w={300}>
            <FormLabel>TYPE</FormLabel>

            <Select placeholder="Secondary" w={300}>
              <option value="option1">Primary</option>
              <option value="option2">Secondary</option>\{" "}
            </Select>
          </FormControl>
        </HStack>
        <Button
          flex="1"
          alignSelf="flex-end"
          className="p-2 m-4"
          colorScheme="blue"
          onClick={onOpen}
        >
          Submit
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          closeOnOverlayClick={false}
          isCentered
          size="xl"
        >
          <ModalOverlay backdropFilter="blur(1px) " />{" "}
          <ModalContent>
            <ModalHeader>
              <CheckCircleIcon color="#46A758" boxSize={6} mr={2} />
              Customer Created Successfully!
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody py={10} mx={2}>
              <Text>
                Customer has been created! return to Dashboard or convert
                customer to Member.
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" variant="outline" onClick={onClose}>
                Return to Dashboard
              </Button>
              <Button
                mr={3}
                className="p-2 m-4"
                colorScheme="blue"
                onClick={onClose}
              >
                Proceed to Membership
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default EditMember;
