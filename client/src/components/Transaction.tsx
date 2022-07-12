import React from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ITransaction } from '../interfaces';
import { numberWithCommas } from '../utils/formatter';

interface ITransactionProps {
    transaction: ITransaction;
}

export const Transaction: React.FC<ITransactionProps> = ({ transaction }) => {

    const { functions: { deleteTransaction, updateTransaction } } = React.useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    const doUpdateTransaction = (transaction: {
        description: string;
        amount: number;
    }, id: string) => {
        const newTransInfo = {
            description: prompt('Enter description', transaction.description),
            amount: Number(prompt('Enter amount', transaction.amount.toString()))
        }
        if (newTransInfo.amount && newTransInfo.description) updateTransaction(id, newTransInfo)
        alert("Please enter valid description and amount.")
    }

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.description}
                <div>
                    <button
                        className="option-btn"
                        onClick={() => deleteTransaction(transaction._id)}
                    >
                        Delete
                    </button>
                    <button
                        className="option-btn"
                        onClick={() => doUpdateTransaction(
                            { description: transaction.description, amount: transaction.amount },
                            transaction._id
                        )}
                    >
                        Update
                    </button>
                    <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
                </div>
            </li>
        </div>
    )
}
