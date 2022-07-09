import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionHistory = () => {
    const { state: { transactions }, functions: { getTransactions } } = useContext(GlobalContext)

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction, idx) => (
                    <Transaction key={idx} transaction={transaction} />
                ))}
            </ul>
        </>
    )
}
