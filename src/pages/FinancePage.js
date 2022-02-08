import TransactionForm from '../components/finance/TransactionForm';
import TransactionsList from '../components/finance/TransactionsList';
import { fetchTransactions } from "../actions/fetchTransactions";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FinancePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [dispatch])

    const transactions = useSelector(state => state.transactions)

    const sortedTransactions = transactions.sort((a, b) => b.id - a.id)

    return (
        <div id="form-db" >
            <section className="dashboard-left finance-form">
                <h1>Record Transaction</h1>
                <TransactionForm />
            </section>
            <section className="dashboard-right ">
                <div className="dashboard-goals">
                    {transactions.length > 0 ?
                    <TransactionsList transactions={sortedTransactions} />
                    : <h3>No transactions to show.</h3>}
                </div>
            </section>
        </div>
    )
}

export default FinancePage;