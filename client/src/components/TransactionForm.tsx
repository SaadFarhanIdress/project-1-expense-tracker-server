import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const TransactionForm = () => {
    const [description, setDescription] = React.useState('');
    const [amount, setAmount] = React.useState(0)

    const { functions: { addTransaction } } = useContext(GlobalContext)

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTransaction = {
            description,
            amount,
        };

        addTransaction(newTransaction);

        setAmount(0);
        setDescription('');

    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        placeholder="Enter description..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        onChange={(e) => setAmount(Number(e.target.value))}
                        value={amount || ''}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
