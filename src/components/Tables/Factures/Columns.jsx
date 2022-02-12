import { IoCheckmarkSharp } from "react-icons/io5";

export const FacturesColumns = [
  {
    Header: "Ref. facture",
    accessor: "id",
  },
  {
    Header: "Description de la facture",
    accessor: "desc_fact",
  },
  {
    Header: "Date de la facture",
    accessor: "date_fact",
  },
  {
    Header: "Site concernés",
    accessor: "site_con",
  },
  {
    Header: "Montant réclamé avant tax",
    accessor: "montant_rec",
  },
  {
    id: "tax",
    Header: "Taxable",
    accessor: (d) => {
      return d.tax ? <IoCheckmarkSharp /> : null;
    },
  },
];
