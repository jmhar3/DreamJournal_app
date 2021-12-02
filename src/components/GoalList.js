import Goal from './GoalItem.js';

const GoalList = ({goals}) => {
    return (
        <ul>
            {/* <Goal goal={goals[0]} /> */}
            { goals.map(goal => (
                <Goal goal={goal} />
            )) }
            <hr />
        </ul>
    )
}

export default GoalList;