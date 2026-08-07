import {  FaUtensils,FaCar,FaMoneyBillWave,FaShoppingBag , FaBolt,FaHeartbeat,FaFilm, FaHome,FaListUl, FaGraduationCap,FaChartLine,FaLaptopCode} from "react-icons/fa";

export const categories = [
    {
    id: 1,
    label: "All Categories",
    value:"all categories",
    icon: FaListUl,
    color:"text-gray-500"
    },
  {
    id: 2,
    label: "Food",
    value:"food",
    type:"expense",
    icon: FaUtensils,
    color:"text-orange-500"
    },
    {
      id: 3,
      label: "Transport",
      value:"transport",
      icon: FaCar,
      type:"expense",
      color:"text-blue-500"
    },
    {
        id: 4,
      label: "Shopping",
        value:"shopping",
        icon: FaShoppingBag,
        type:"expense",
        color:"text-pink-500"
    },
    {
        id: 5,
      label: "Bills",
      value:"bills",
      icon: FaBolt,
        type:"expense",
        color:"text-yellow-500"
    },
    {
        id: 6,
      label: "Salary",
        value:"salary",
      icon: FaMoneyBillWave,
        type:"income",
        color:"text-green-600"
    },
    {
    id: 7,
      label: "Healthcare",
    value:"healthcare",
      icon: FaHeartbeat,
    type:"expense",
    color:"text-red-500"
    
    },
    {
    id: 8,
      label: "Entertainment",
    value:"entertainment",
      icon: FaFilm,
        type:"expense",
     color:"text-purple-500"
    
    },
    {
    id: 9,
      label: "Household",
    value:"household",
      icon: FaHome,
     type:"expense",
     color:"text-slate-500"
    
  }, {
      id: 10,
      label: "Education",
      value:"education",
      icon: FaGraduationCap,
      type:"expense",
      color:"text-indigo-500"
    
  },
    {
    id: 11,
      label: "Freelance",
    value:"freelance",
    icon:FaLaptopCode,
    type: "income",
    color:"text-cyan-500"
      
    },
    {
      id: 12,
      label: "Investment",
      value:"investment",
      icon: FaChartLine,
      type:"income",
      color:"text-emerald-600"
    
  },

];