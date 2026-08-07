import { FaListUl, FaArrowUp, FaArrowDown } from "react-icons/fa";

export const transactionTypes = [
  {
    id: 1,
    label: "All Types",
    value:"all types",
    icon: FaListUl,
    color: "text-gray-500",
  },
  {
    id: 2,
    label: "Income",
    value:"income",
    icon: FaArrowUp,
    color: "text-green-500",
  },
  {
    id: 3,
    label: "Expense",
    value:"expense",
    icon: FaArrowDown,
    color: "text-red-500",
  },
];