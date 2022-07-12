import { Action, IInitialState } from "../interfaces";

const AppReducer = (state: IInitialState, action: Action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction._id !==
                    action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'UPDATE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction, idx) =>
                    transaction._id === action.payload._id ? state.transactions[idx] = action.payload : transaction)
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer;