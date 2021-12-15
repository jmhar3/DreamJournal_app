import TransactionForm from '../components/finance/TransactionForm';
import TransactionsList from '../components/finance/TransactionsList';
import { fetchTransactions } from "../actions/fetchTransactions";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FinancePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [])

    const transactions = useSelector(state => state.transactions)

    return (
        <div id="form-db" >
            <section className="dashboard-left">
                <h1>Record Transaction</h1>
                <TransactionForm />
            </section>
            <section className="dashboard-right ">
                <div className="dashboard-goals">
                    {transactions.length > 0 ?
                    <TransactionsList transactions={transactions} />
                    : <h3>No transactions to show.</h3>}
                </div>
            </section>
        </div>
    )
}

export default FinancePage;