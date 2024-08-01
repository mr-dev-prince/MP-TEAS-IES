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
import { headerOptions } from "../../constants/Options";
import { Link, useNavigate } from "react-router-dom";

export function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const navigate = useNavigate();
  const options = headerOptions.map((item) => item.options);

  const onOptionClick = (href) => {
    navigate(href);
    onClose();
  };

  return (
    <>
      <Button ref={btnRef}  onClick={onOpen}>
        <FaAlignLeft size={24} color="black" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        className="select-none"
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#D6E3FF"}>
          <DrawerCloseButton
            size={24}
            color={"white"}
            marginTop={"3%"}
            marginRight={"5%"}
            bgColor={"red"}
            padding={"2%"}
          />
          <DrawerHeader>
            <Link href="/">
              <p className="text-3xl font-extrabold ">
                <span className=" bg-gradient-to-t from-blue-900 to-sky-400 bg-clip-text text-transparent">
                  MP-
                </span>
                <span className=" bg-gradient-to-t from-orange-700 to-orange-400 bg-clip-text text-transparent">
                  TEAS
                </span>
              </p>
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col gap-2">
              <p
                className="bg-blue-500 text-white py-1 px-2 rounded-md cursor-pointer"
                onClick={() => onOptionClick("/")}
              >
                Home
              </p>
              {(() => {
                const items = [];
                options.forEach((item) =>
                  item?.forEach((i) =>
                    items.push(
                      <p
                        className="bg-blue-500 text-white py-1 px-2 rounded-md cursor-pointer"
                        key={i.id}
                        onClick={() => onOptionClick(i.href)}
                      >
                        {i.value}
                      </p>
                    )
                  )
                );
                return items;
              })()}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
