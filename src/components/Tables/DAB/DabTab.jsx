import React, { useMemo } from "react";
import { useTable } from "react-table";

import { DABColumns } from "./Columns";

const DabTab = ({ dabs, setIsEdit, setDabToEdit, setShowModal }) => {
  const columns = useMemo(() => DABColumns, []);
  const data = dabs;
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
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

export default DabTab;
