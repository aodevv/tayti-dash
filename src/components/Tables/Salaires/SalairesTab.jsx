import React, { useMemo } from "react";
import { useTable } from "react-table";

import DATA from "./data.json";

import { SalairesColumns } from "./Columns";

const SalairesTab = ({ salaires, setIsEdit, setFactToEdit, setShowModal }) => {
  const columns = useMemo(() => SalairesColumns, []);
  const data = DATA;
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  //   const handleClick = (row) => {
  //     setIsEdit(true);
  //     setShowModal(true);
  //     setFactToEdit(row.original);
  //   };
  return (
    <table {...getTableProps()} className="has_edit">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((columns) => (
              <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SalairesTab;
