import { Box, Button, Container, Text, Link, Hide,Show } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { FiChevronDown } from "react-icons/fi";

import React from "react";

const MenuItems = () => {
  return (
    <>
      <Menu isLazy>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color:"#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          About us
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu isLazy>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color:"#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Pages
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color:"#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Services
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color:"#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Portfolio
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color:"#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Blog
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color:"#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Contact us
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

const Navbar = () => (
  <Box
    display={"flex"}
    position={"fixed"}
    alignItems={"center"}
    height={"80px"}
    width={"100%"}
    justifyContent={"space-between"}
    paddingX={10}
    zIndex={1000}
    bgColor="white"
    boxShadow={"1px 1px 80px rgba(0,0,0,.3)"}
  >
    <Text fontFamily={"font"} fontSize={"3xl"} fontWeight={"bold"}>
      <Text color="primary.100" as="span">
        Dr.
      </Text>
      Clean
    </Text>


    <Hide below="md">
      <Box>
        <MenuItems />
      </Box>

    </Hide>

  </Box>



);
//rightIcon={<ChevronDownIcon />}
export default Navbar;
