import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import { reducer, capitalize } from "../../Helpers";
// import { defaults } from 'react-chartjs-2';
// defaults.global.legend.display = false;

const FinanceCategories = ({ transactions, type }) => {
    const byDirection = (transaction) => transaction.direction === type;
    const filteredByDirection = transactions.filter(byDirection)

    const reduceCategories = () => {
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        const categoriesList = filteredByDirection.map(transaction => transaction.category)
        return categoriesList.filter(onlyUnique);
    }

    const amounts = () => {
        return reduceCategories().map(category => {
            const filteredTransactions = filteredByDirection.filter(transaction => transaction.category === category)
            const filteredAmounts = filteredTransactions.map(transaction => transaction.amount)
            return filteredAmounts.reduce(reducer)
        })
    }

    var colours = []
    const setColours = () => reduceCategories().map(() => colours.push(randomColor()));
    setColours()

    const categoryData = {
        labels: reduceCategories(),
        datasets: [
            {
                label: 'Category',
                backgroundColor: colours,
                data: amounts(),
                borderWidth: 0,
                borderRadius: 18
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <>
            <h2>{capitalize(type)}</h2>
            <span>
                <div className="doughnut">
                    <Doughnut data={categoryData} options={options} />
                </div>
                <ul>
                    {reduceCategories().map((cat, i) => {
                        return (
                            <li><div style={{ backgroundColor: colours[i] }}></div> {cat}</li>
                        )
                    })}
                </ul>
            </span>
        </>
    )
}

export default FinanceCategories;