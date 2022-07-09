import { createContext, useReducer } from "react"
import AppReducer from './AppReducer';
import axios from 'axios';
import { IDispatch, IFunctions, IInitialState, ITransaction } from "../interfaces";

const initialState = {
    transactions: [{
        _id: '',
        description: '',
        amount: 0,
        postedAt: ''
    }],
    error: null,
    loading: true,
}

export const GlobalContext = createContext<{
    state: IInitialState;
    dispatch: IDispatch;
    functions: IFunctions;
}>({
    state: initialState,
    dispatch: () => { },
    functions: {
        getTransactions: () => { },
        deleteTransaction: () => { },
        addTransaction: () => { }
    }
});

export const GlobalProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    async function getTransactions() {
        try {
            const res = await axios.get(`/transactions`);
            if (res.data.status) {
                return dispatch({
                    type: 'GET_TRANSACTIONS',
                    payload: res.data.transactions
                })
            }
        } catch (error) {
            return dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error
            })
        }
    }

    async function deleteTransaction(id: string) {
        try {
            const res = await axios.delete(`/transactions/${id}`);
            if (res.data.status) {
                return dispatch({
                    type: "DELETE_TRANSACTION",
                    payload: res.data.id
                })
            }
        } catch (error) {
            return dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error
            });
        }
    }

    async function addTransaction(transaction: ITransaction) {
        try {
            const res = await axios.post('/transactions', transaction);
            if (res.data.status) {
                return dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: res.data.transaction
                })
            }
        } catch (error) {
            return dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error
            })
        }
    }
    return (
        <GlobalContext.Provider value={{
            state,
            dispatch,
            functions: {
                getTransactions,
                deleteTransaction,
                addTransaction
            }
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
