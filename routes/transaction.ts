import express from 'express';
import {
    addTransaction,
    deleteTransaction,
    getTransactions,
    updateTransaction
} from '../controllers/transaction';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', addTransaction);
router.delete('/:id', deleteTransaction);
router.put('/:id', updateTransaction)

export default router;