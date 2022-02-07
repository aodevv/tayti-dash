export const SalairesColumns = [
  {
    Header: "Nom de la personne",
    accessor: "name",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Date de la période",
    accessor: "date_per",
  },
  {
    Header: "Montant réclamé",
    accessor: "montant_rec",
  },
  {
    Header: "Heures réclamés",
    columns: [
      {
        Header: "Reg",
        accessor: "Hreg",
      },
      {
        Header: "Suppl",
        accessor: "Hsup",
      },
    ],
  },
  {
    Header: "Taux horaires",
    columns: [
      {
        Header: "Reg",
        accessor: "Treg",
      },
      {
        Header: "Suppl",
        accessor: "Tsup",
      },
    ],
  },
  {
    Header: "Taux de vacances",
    accessor: "taux_vac",
  },
  {
    Header: "A.E",
    accessor: "ae",
  },
  {
    Header: "R.R.Q",
    accessor: "rrq",
  },
  {
    Header: "R.Q.A.P",
    accessor: "rqap",
  },
];
