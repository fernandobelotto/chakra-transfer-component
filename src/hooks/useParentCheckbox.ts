import { useState } from "react";

type returnType = {
  left: any[];
  right: any[];
  handleParentCheckboxRight: () => void;
  handleParentCheckboxLeft: () => void;
  handleCheckboxRight: (id: string) => void;
  handleCheckboxLeft: (id: string) => void;
  isIndeterminateRight: boolean;
  allCheckedRight: boolean;
  isIndeterminateLeft: boolean;
  allCheckedLeft: boolean;
  moveToLeft: () => void;
  moveToRight: () => void;
};

export function useParentCheckbox(initial: any[]): returnType {
  const [left, setLeft] = useState(initial);
  const [right, setRight] = useState([]);

  const allCheckedLeft =
    left.every((value) => value.checked === true) && left.length > 0;
  const isIndeterminateLeft =
    left.some((value) => value.checked === true) && !allCheckedLeft;

  const allCheckedRight =
    right.every((value) => value.checked === true) && right.length > 0;
  const isIndeterminateRight =
    right.some((value) => value.checked === true) && !allCheckedRight;

  function moveToRight() {
    const itemsChecked = left.filter((item) => item.checked);
    const itemsNotChecked = left.filter((item) => !item.checked);
    setRight([...right, ...itemsChecked]);
    setLeft(itemsNotChecked);
  }

  function moveToLeft() {
    const itemsChecked2 = right.filter((item) => item.checked);
    const itemsNotChecked2 = right.filter((item) => !item.checked);
    setRight(itemsNotChecked2);
    setLeft([...left, ...itemsChecked2]);
  }

  function handleCheckboxRight(id: string) {
    const updateList = right.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
        return item;
      }
      return item;
    });

    setRight(updateList);
  }

  function handleCheckboxLeft(id: string) {
    const updateList = left.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
        return item;
      }
      return item;
    });

    setLeft(updateList);
  }

  function handleParentCheckboxLeft() {
    let updateList;

    if (allCheckedLeft) {
      updateList = left.map((item) => {
        item.checked = false;
        return item;
      });
    } else {
      updateList = left.map((item) => {
        item.checked = true;
        return item;
      });
    }

    setLeft(updateList);
  }

  function handleParentCheckboxRight() {
    let updateList;

    if (allCheckedRight) {
      updateList = right.map((item) => {
        item.checked = false;
        return item;
      });
    } else {
      updateList = right.map((item) => {
        item.checked = true;
        return item;
      });
    }

    setRight(updateList);
  }

  return {
    left,
    right,
    handleParentCheckboxRight,
    handleParentCheckboxLeft,
    handleCheckboxLeft,
    handleCheckboxRight,
    isIndeterminateLeft,
    allCheckedLeft,
    isIndeterminateRight,
    allCheckedRight,
    moveToLeft,
    moveToRight,
  };
}
