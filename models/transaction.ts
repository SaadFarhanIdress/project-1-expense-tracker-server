import { Schema, model } from 'mongoose';
import { ITransaction } from '../interfaces';

const TransactionSchema = new Schema<ITransaction>({
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    postedAt: {
        type: Date,
        default: Date.now
    }
})

const TransactionModel = model<ITransaction>("transactions", TransactionSchema);

export default TransactionModel;
