import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';


const FinanceCategories = ({transactions}) => {
    const categories = transactions.map(transaction => transaction.category)

    const amounts = () => {
        const reducer = (prevValue, currValue) => prevValue.amount + currValue.amount;

        console.log(transactions.filter(transaction => transaction.category === 'personal').reduce(reducer))
        
        return categories.map(category => {
            const filteredTransactions = transactions.filter(transaction => transaction.category === category)
            return filteredTransactions.reduce(reducer)
        })
    }
    
    const categoryData = {
        labels: categories,
        datasets: [
            {
                label: 'Category',
                backgroundColor: [...Array(categories.length)].map((e, i) => randomColor()),
                data: amounts()
            }
        ]
    }

    return (
        <Doughnut data={categoryData} />
    )
}

export default FinanceCategories;