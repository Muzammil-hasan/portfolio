import React, { useEffect, useRef } from "react";

const Cursor = ({ dot }) => {
  return (
    <>
      <div ref={dot} className='cursor-dot'></div>
    </>
  );
};

export default Cursor;
