import TransactionForm from '../components/finance/TransactionForm';
import TransactionsList from '../components/finance/TransactionsList';

const FinancePage = () => {
    return (
        <div id="goal-db" >
            <section className="dashboard-left">
                <h1>Record Transaction</h1>
                <TransactionForm />
            </section>
            <section className="dashboard-right ">
                <div>
                    <TransactionsList />
                </div>
            </section>
        </div>
    )
}

export default FinancePage;