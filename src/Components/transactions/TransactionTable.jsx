import TransactionRow from "./TransactionRow";

import NoResult from "./NoResults";
import EmptyTransactions from "./EmptyTransactions";
const TransactionTable = ({ transactions, totalTransactions, setIsFormOpen, setEditingTransaction, setIsDeleteDialogOpen, setSelectedTransaction }) => {
    const tableHeaders = [
        "Date",
        "Title",
        "Category",
        "Amount",
        "Type",
        "Actions",
    ];



    return (
        <section className="w-full mt-16 font-[inter] px-3 mb-5">

            {totalTransactions == 0 ? <EmptyTransactions /> : <div className="flex overflow-x-auto px-5 rounded-xl py-5 shadow-sm hide-scrollbar">
                <table className=" min-w-240 w-full ">
                    <thead>
                        <tr className="bg-gray-50">
                            {tableHeaders.map((header) => (
                                <th key={header} className="px-3 py-4 border-y text-left text-sm font-semibold uppercase tracking-wide  border-gray-200">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length == 0 ?
                            <NoResult /> :
                            (
                                transactions.map((transaction) => (
                                    <TransactionRow key={transaction._id}
                                        transaction={transaction}
                                        setEditingTransaction={setEditingTransaction}
                                        setIsFormOpen={setIsFormOpen}
                                        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
                                        setSelectedTransaction={setSelectedTransaction}
                                    />
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>}

        </section>
    )
}

export default TransactionTable