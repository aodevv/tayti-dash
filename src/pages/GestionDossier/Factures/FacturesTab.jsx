import React, { useMemo } from "react";
import { useTable } from "react-table";

import { FacturesColumns } from "./Columns";

import { ButtonS } from "../../../components/Mix/Mix.styles";

import { MdModeEdit } from "react-icons/md";

import DATA from "./data.json";

const FacturesTab = () => {
  const columns = useMemo(() => FacturesColumns, []);
  const data = useMemo(() => DATA, []);
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
              <td>
                <ButtonS>
                  <MdModeEdit />
                </ButtonS>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FacturesTab;
