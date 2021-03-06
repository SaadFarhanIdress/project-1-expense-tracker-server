import { Dispatch } from "react";

export interface ITransaction {
    _id: string;
    description: string;
    amount: number;
    postedAt: string;
}

export interface IInitialState {
    transactions: ITransaction[],
    error: any;
}

export type Action =
    | { type: 'GET_TRANSACTIONS'; payload: ITransaction[] }
    | { type: 'DELETE_TRANSACTION'; payload: string; }
    | { type: 'ADD_TRANSACTION'; payload: ITransaction }
    | { type: 'TRANSACTION_ERROR'; payload: any }
    | { type: 'UPDATE_TRANSACTION'; payload: ITransaction }

export type IDispatch = Dispatch<Action>

export interface IFunctions {
    addTransaction: Function;
    getTransactions: Function;
    deleteTransaction: Function;
    updateTransaction: Function;
}