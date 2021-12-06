import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { connect } from 'react-redux';

const FinanceChart = ({ transactions, type }) => {

    const dateTime = new Date()

    const allValues = () => {
        const byDirection = (transaction) => transaction.direction === type.toLowerCase();
        const filteredTransactions = transactions.filter(byDirection)

        function weekday(count) {
            const date = dateTime.getDate() - count
            const month = dateTime.getMonth() + 1
            const year = dateTime.getFullYear()
            const validDate = (num) => {
                if (num.toString().length === 1) {
                    return "0" + num
                } else {
                    return num
                }
            }
            return year + "-" + validDate(month) + "-" + validDate(date);
        }

        function byDay(transactions, count) {
            return transactions.filter(function (transaction) {
                return transaction.date === weekday(count);
            })
        }

        const weeklyValues = [byDay(filteredTransactions, 6), byDay(filteredTransactions, 5), byDay(filteredTransactions, 4), byDay(filteredTransactions, 3), byDay(filteredTransactions, 2), byDay(filteredTransactions, 1), byDay(filteredTransactions, 0)]
        const values = weeklyValues.map(transaction => transaction.amount);
        return values.map(v => v === undefined ? 0 : v);
    }

    const day = dateTime.getDay();

    const dailyLabels = ['Mon', 'Tue', 'Wed',
        'Thu', 'Fri', 'Sat', 'Sun']

    const adjustedLabels = dailyLabels.slice(day).concat(dailyLabels.slice(0, day))

    const chartData = {
        labels: adjustedLabels,
        datasets: [
            {
                label: type,
                backgroundColor: '#d40819',
                data: allValues()
            }
        ]
    }

    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    
    return (
        <div>
            <h2>💸 {type}</h2>
            <p>${allValues().reduce(reducer)}</p>
            <Bar data={chartData} />
        </div>
    )
}

const mapStateToProps = state => {
    return { transactions: state.transactions }
}

export default connect(mapStateToProps)(FinanceChart);