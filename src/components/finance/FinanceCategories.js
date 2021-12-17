import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import randomColor from 'randomcolor';
import { reducer, capitalize } from "../../Helpers";

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
            const filteredAmounts = filteredTransactions.map(transaction => parseFloat(transaction.amount))
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
                    {/* <h2>{type === "expense" ? "💸" : "🤑"}</h2> */}
                    <Doughnut data={categoryData} options={options} />
                </div>
                <ul>
                    {reduceCategories().map((cat, i) => {
                        return (
                            <li><div style={{ backgroundColor: colours[i] }}></div> {capitalize(cat)}</li>
                        )
                    })}
                </ul>
            </span>
        </>
    )
}

export default FinanceCategories;