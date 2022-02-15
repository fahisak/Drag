import { DragIconWrapper } from "../styles";
 import { ReactComponent as DragHandleIcon } from "../icon.svg";
import React from "react";

export function DragHandle(props) {
  return (
    <DragIconWrapper {...props}>
      <DragHandleIcon />
    </DragIconWrapper>
  );
}