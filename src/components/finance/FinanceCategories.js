import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import { reducer } from "../../Helpers";


const FinanceCategories = ({transactions}) => {
    var categories;

    const reduceCategories = () => {
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        const categoriesList = transactions.map(transaction => transaction.category)
        categories = categoriesList.filter(onlyUnique);
    }

    reduceCategories()

    const amounts = () => {
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