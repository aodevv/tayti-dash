import { IoCheckmarkSharp } from "react-icons/io5";

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
    id: "ae",
    Header: "A.E",
    accessor: (d) => {
      return d.ae ? <IoCheckmarkSharp /> : null;
    },
  },
  {
    id: "rrq",
    Header: "R.R.Q",
    accessor: (d) => {
      return d.rrq ? <IoCheckmarkSharp /> : null;
    },
  },
  {
    id: "rqap",
    Header: "R.Q.A.P",
    accessor: (d) => {
      return d.rqap ? <IoCheckmarkSharp /> : null;
    },
  },
  {
    id: "fss",
    Header: "F.S.S",
    accessor: (d) => {
      return d.fss ? <IoCheckmarkSharp /> : null;
    },
  },
  {
    id: "csst",
    Header: "C.S.S.T",
    accessor: (d) => {
      return d.csst ? <IoCheckmarkSharp /> : null;
    },
  },
];
