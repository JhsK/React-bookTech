import React from "react";
import Td from "./Td";

const Tr = ({ rowData, rowIndex }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => {
          <Td key={i} rowIndex={rowIndex} cellIndex={i} cellData={rowData}>
            {""}
          </Td>;
        })}
    </tr>
  );
};

export default Tr;
