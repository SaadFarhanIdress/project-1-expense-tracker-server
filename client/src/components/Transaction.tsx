import React from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ITransaction } from '../interfaces';
import { numberWithCommas } from '../utils/formatter';

interface ITransactionProps {
    transaction: ITransaction;
}

export const Transaction: React.FC<ITransactionProps> = ({ transaction }) => {
    const { functions: { deleteTransaction } } = React.useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.description}
                <span>{sign}${Math.abs(numberWithCommas(transaction.amount))}</span>
                <button onClick={() => deleteTransaction(transaction._id)}
                    className="delete-btn">
                    x
                </button>
            </li>
        </div>
    )
}
