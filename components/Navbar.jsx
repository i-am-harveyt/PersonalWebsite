import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  Link as CLink,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        pos={"fixed"}
        left={0}
        top={0}
        w={"100%"}
        padding={"1rem"}
        display={"grid"}
        gridTemplateColumns={"max-content auto max-content"}
      >
        <BtnDrawer />
        <Text margin={"auto"} fontSize={"lg"}>
          <Link href={"/"}>HarveyTung</Link>
        </Text>
        <IconButton float={"right"} isRound={true} onClick={toggleColorMode}>
          {colorMode == "light" ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </Box>
    </>
  );
}

function BtnDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const color = useColorModeValue("gray.800", "gray.200");

  return (
    <>
      <IconButton
        float={"left"}
        variant={"ghost"}
        isRound="true"
        onClick={onOpen}
      >
        <HamburgerIcon color={color} />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement={"left"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Text fontSize={"2xl"}>Navigation</Text>
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize={"lg"}>
              <CLink href="/about_me">About Me</CLink>
            </Text>
            <br />
            <Text fontSize={"lg"}>
              <Link href={"/contact_me"}>Email Me</Link>
            </Text>
            <br />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
