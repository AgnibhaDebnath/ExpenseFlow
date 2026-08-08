import { createContext, useState } from "react"

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [transactionFilters, setTransactionFilters] = useState({
        type: "all types",
        category: "all categories",
        search: "",
        dateFilter: "this-month",
    });
    const [dashboardDateFilter, setDashboardDateFilter] = useState("this-month");

    return (
        <FilterContext.Provider
            value={{
                transactionFilters,
                setTransactionFilters,
                dashboardDateFilter,
                setDashboardDateFilter
            }}

        >
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider