import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { headerOptions } from "../../constants/Options";

export function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} bgColor={"transparent"} onClick={onOpen}>
        <FaAlignLeft size={24} color="white" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay  />
        <DrawerContent bgColor={"#3E6FD9"}>
          <DrawerCloseButton />
          <DrawerHeader bgColor={"#3965C4"} textColor={"#fff"} fontFamily={"serif"}>MP-TEAS</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col gap-2">
              {headerOptions.map((item) => (
                <Link className=" bg-blue-300/[0.7] text-white font-semibold py-2 px-4 rounded-sm" to={item.href}>{item.value}</Link>
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
