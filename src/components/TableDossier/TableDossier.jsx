import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDossiers } from "../../redux/DossierInfos/infosDossier.selectors";

import { useTable } from "react-table";
import { COLUMNS } from "./ColumnsDossier";

import "./TableDossier.scss";

const TableDossier = ({ dossiers }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = dossiers;
  const history = useNavigate();
  const handleRowClick = (row) => {
    history(`/dossier/${row.original.Numero}`);
  };

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()}>
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
            <tr {...row.getRowProps()} onClick={() => handleRowClick(row)}>
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

const mapStateToProps = createStructuredSelector({
  dossiers: selectDossiers,
});

export default connect(mapStateToProps)(TableDossier);
