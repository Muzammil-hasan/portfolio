import React from "react";
import { useStore } from "../contexts/Store";

const Cursor = () => {
  const { dot } = useStore();

  return <div ref={dot} className='cursor-dot'></div>;
};

export default Cursor;
