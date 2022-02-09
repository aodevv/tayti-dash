import React, { useMemo } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDABFactures } from "../../redux/Factures/Factures.selectors";

import { useNavigate, useParams } from "react-router-dom";
import { useTable } from "react-table";

import { DossierColumns } from "./Columns";

import DATA from "../../assets/DM_DATA.json";
import "./DossierDetailsTable.scss";

const DMTable = ({ factures }) => {
  const params = useParams();
  if (factures[params.dossierId]) {
    const facturesTotal = factures[params.dossierId].reduce(
      (acc, facture) => acc + facture.montant_rec,
      0
    );
    DATA[0].mr = `$${facturesTotal}`;
  }

  const columns = useMemo(() => DossierColumns, []);
  const data = useMemo(() => DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const history = useNavigate();
  const handleRowClick = (row) => {
    history(`${window.location.pathname}/${row.original.link}`);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()} className="row_highlight">
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
  factures: selectDABFactures,
});

export default connect(mapStateToProps)(DMTable);
