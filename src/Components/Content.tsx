import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { BsMotherboard, BsFillHddNetworkFill } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";

import card2 from "../assets/card2.jpg";

import { ContentCard } from "./ContentCard";

const title = "Electrical Engineering";
const description = "We only include the most qualifed licensed electricicias";
const link = "http//www.google.com";

const ContentData = [
  {
    id: 1,
    title: "Electrical Engineering",
    description: "We only include the most qualifed licensed electricicias",
    link: "http//www.google.com",
    icon: MdElectricalServices,
    image: card2,
  },
  {
    id: 2,
    title: "Domestic Electrician",
    description: "Install wiring, lighting & appliances throughout a property",
    link: "http//www.google.com",
    icon: BsFillHddNetworkFill,
    image: card2,
  },
  {
    id: 3,
    title: "Industrial Electrician",
    description: "Perform variety of functions realted electronic at work site",
    link: "http//www.google.com",
    icon: BsMotherboard,
    image: card2,
  },
];

const Content = () => {
  return (
    <Flex flexDir={"column"}>
      <Flex
        position="relative"
        width="100%"
        height={"100%"}
        background={"white"}
        padding={{ base: "6", md: "60px" }}
        paddingX={{ base: "6", md: "70", lg: "210" }}
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "30px", md: "70px" }}
        >
          <Box
            padding={{ base: 5, md: 8 }}
            bg="#FF4C01"
            width={{ base: "100%", md: "70%" }}
          >
            <Text color="font.100" fontFamily="font">
              WHO WE ARE
            </Text>
            <Text
              color="font.100"
              fontFamily="font"
              fontWeight="bold"
              fontSize="3xl"
            >
              ALL Types Of Electricity Service Provide Firm
            </Text>
          </Box>

          <Box>
            <Text fontSize="3xl" fontFamily="font" fontWeight="bold" mb={2}>
              Our Successful History
            </Text>

            <Text color="font.200" lineHeight={"30px"} fontFamily="font" mb={2}>
              Established in 1986, Mr. Handy is a global franchise organization
              providing electrical installation and repair services.
              <b> Recognized by Entrepreneur</b> among its Franchise. Mr. Handy
              provide services to both residential and commercial almost 200
              locations worldwide.
            </Text>

            <Button
              height={"50px"}
              background={"transparent"}
              fontFamily="font"
              color="#222222"
              rightIcon={<BiSolidChevronRightCircle />}
              padding={0}
              _hover={{
                color: "#FF4C01",
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Flex>

        {/* <Box></Box> */}
      </Flex>

      <Flex
        position="relative"
        width="100%"
        height={"100%"}
        background={"white"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        // padding={{ base: "6", md: "100px" }}
        gap={5}
        paddingX={{ base: "0", md: "70", lg: "220" }}
      >
        {/* <ContentCard
          icon={BsMotherboard}
          image={card2}
          title={title}
          description={description}
          link={link}
        />
        <ContentCard />
        <ContentCard /> */}
        {ContentData.map(({ id, title, image, description, link, icon }) => 
        (
          <ContentCard
          image={image}
          title={title}
          description={description}
          link={link}
          icon={icon}
        />
        )
        )}
      </Flex>
    </Flex>
  );
};

export default Content;
