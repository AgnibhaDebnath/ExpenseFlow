
const DeleteTransactionDialog = ({ isDeleteDialogOpen, setIsDeleteDialogOpen, handleDeleteTransaction }) => {
    return (
        <>
            {isDeleteDialogOpen && <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 font-[inter]">
                <section
                    className="w-88 min-[410px]:w-100 min-[460px]:w-full max-w-md rounded-2xl bg-white
                     px-6 min-[410px]:px-8 py-10 shadow-xl"

                >
                    <header className="flex justify-center">
                        <h3 className="text-xl font-semibold">
                            Delete Transaction
                        </h3>
                    </header>

                    <p className="mt-3 text-[0.94rem] min-[410px]:text-base text-gray-600">
                        Are you sure you want to delete this transaction?
                    </p>

                    <p className="mt-2 text-sm text-red-600 tracking-wide">
                        This action cannot be undone.
                    </p>

                    <footer className="mt-6 flex justify-end gap-3">
                        <button onClick={() => {
                            setIsDeleteDialogOpen(false)
                        }} className="px-5 py-1 bg-gray-500 hover:bg-gray-600 text-gray-50 rounded-md cursor-pointer font-medium transition-all duration-200">Cancel</button>
                        <button onClick={() => handleDeleteTransaction()} className="px-5 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer font-medium transition-all duration-200">Delete</button>
                    </footer>
                </section>
            </div>}
        </>
    )

}
export default DeleteTransactionDialog