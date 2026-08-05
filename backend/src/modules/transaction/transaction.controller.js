
import { createTransactionService,getTransactionsService ,updateTransactionService,deleteTransactionService} from "./transaction.service.js";
const createTransactionController = async (req, res, next) => {
    try {
        await createTransactionService(req.body, req.user);
        res.status(201).json({
            success: true,
            message:"Transaction added successfully",
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: true,
            message:"Something went wrong",
        })
}
}

const getTransactionsController = async (req, res, next) => {
    
    const type = req.query.type || "all types"
    const category = req.query.category || "all categories"
    const search = req.query.search || "";
    const dateFilter = req.query.dateFilter || "this-month";
    
    try {
    
        const { totalTransactions,transactions } = await getTransactionsService(type, category,search,dateFilter,req.user);
        res.status(201).json({
            totalTransactions,
            transactions
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"Something went wrong",
        })
}
    
}

const updateTransactionController = async (req,res,next) => {
    const transactionID = req.params.id;
    const updatedTransaction = await updateTransactionService(req.body, transactionID, req.user)
    if (!updatedTransaction) {
        return res.status(404).json({
            message: "Transaction not found",
        });
    }
    res.status(200).json({
    message: "Transaction updated successfully",
    })

    
}

const deleteTransactionController = async(req,res,next) => {
    const transactionID = req.params.id;
    const deleted = await deleteTransactionService(transactionID, req.user)
    if (!deleted) {
        return res.status(404).json({
        message:"Transaction not found",
        })

    }
    res.status(200).json({
     message:"Transaction deleted successfully",
        })

}

export {
    createTransactionController, getTransactionsController,
    updateTransactionController, deleteTransactionController
}