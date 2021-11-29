import TransactionForm from '../components/TransactionForm';

const FinancePage = () => {
    return (
        <div id="goal-db" >
            <section className="dashboard-left">
                <h1>Record New Transaction</h1>
                <TransactionForm />
            </section>
            <section className="dashboard-right ">
                <h1>Hello World</h1>
            </section>
        </div>
    )
}

export default FinancePage;