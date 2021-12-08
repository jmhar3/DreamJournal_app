import { Doughnut } from 'react-chartjs-2';



const FinanceCategories = ({transactions}) => {
    const categories = ['clothing', 'debt', 'education', 'entertainment', 'food', 'health', 'household', 'housing', 'insurance', 'personal', 'savings', 'transport', 'utility', 'other']
    
    const categoryData = {
        labels: categories,
        datasets: [
            {
                label: 'Category',
                backgroundColor: ['#F27608', '#F2CF08', '#F31904', '#17D90B', '#0BB0D9', '#A16BEE', '#DF55B3', '#FE4E70', '#FE352B', '#A8FA8D', '#8DCCFA', '#9F8DFA', '#9640F1'],
                data: [65, 59, 80, 120, 56, 30, 10, 65, 59, 80, 120, 56, 30, 10]
            }
        ]
    }

    return (
        <Doughnut data={categoryData} />
    )
}

export default FinanceCategories;