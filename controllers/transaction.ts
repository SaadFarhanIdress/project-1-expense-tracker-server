import { Request, Response } from 'express';
import TransactionModel from '../models/transaction';

export const getTransactions = async (req: Request, res: Response) => {
    try {
        const transactions = await TransactionModel.find({});
        return res.status(200).json({ status: true, transactions });
    } catch (error) {
        return res.status(500).json({ status: false, error });
    }
}

export const addTransaction = async (req: Request, res: Response) => {
    try {
        const transaction = new TransactionModel(req.body);
        const savedTransaction = await transaction.save();
        return res.status(200).json({ status: true, transaction: savedTransaction });
    } catch (error) {
        return res.status(500).json({ status: false, error });
    }
}

export const deleteTransaction = async (req: Request, res: Response) => {
    try {
        const transaction = await TransactionModel.findById(req.params.id);
        if (!transaction) {
            res.status(404).json({ status: false, error: 'Transaction not found' });
        }
        await TransactionModel.deleteOne({ _id: req.params.id });
        return res.status(200).json({ status: true, id: transaction?._id });
    } catch (error) {
        return res.status(500).json({ status: false, error });
    }
}
