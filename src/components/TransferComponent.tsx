import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Checkbox, IconButton, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParentCheckbox } from "../hooks/useParentCheckbox";

const initial = [
  { id: "a", label: "checkbox1", value: 1, checked: false },
  { id: "b", label: "checkbox2", value: 2, checked: false },
  { id: "c", label: "checkbox3", value: 3, checked: false },
];

function TransferBox(props) {
  return (
    <Box>
      <Box
        w={"180px"}
        h={"40px"}
        border="1px solid"
        borderColor="gray.500"
        borderBottom={"none"}
        p={2}
      >
        <Checkbox
          isChecked={props.allChecked}
          isIndeterminate={props.isIndeterminate}
          onChange={props.handleParentCheckbox}
        >
          {props.left.length} items
        </Checkbox>
      </Box>
      <Box
        border="1px solid"
        borderColor="gray.500"
        p={2}
        w={"180px"}
        h="180px"
        overflow="scroll"
      >
        <Stack spacing={1}>
          {props.left.map((item) => {
            return (
              <>
                <Checkbox
                  isChecked={item.checked}
                  onChange={() => props.handleCheckbox(item.id)}
                >
                  {item.label}
                </Checkbox>
              </>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default function TransferComponent() {
  const {
    allCheckedLeft,
    allCheckedRight,
    handleCheckboxLeft,
    handleCheckboxRight,
    handleParentCheckboxLeft,
    handleParentCheckboxRight,
    isIndeterminateLeft,
    isIndeterminateRight,
    left,
    moveToLeft,
    moveToRight,
    right,
  } = useParentCheckbox(initial);

  return (
    <>
      <TransferBox
        left={left}
        allChecked={allCheckedLeft}
        isIndeterminate={isIndeterminateLeft}
        handleCheckbox={handleCheckboxLeft}
        handleParentCheckbox={handleParentCheckboxLeft}
      />
      <IconButton
        size="xs"
        aria-label="right"
        onClick={moveToRight}
        icon={<ChevronRightIcon />}
      />
      <IconButton
        onClick={moveToLeft}
        size="xs"
        aria-label="left"
        icon={<ChevronLeftIcon />}
      />
      <TransferBox
        left={right}
        allChecked={allCheckedRight}
        isIndeterminate={isIndeterminateRight}
        handleCheckbox={handleCheckboxRight}
        handleParentCheckbox={handleParentCheckboxRight}
      />
    </>
  );
}
