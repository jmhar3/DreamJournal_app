import Goal from './GoalItem.js';

const GoalList = ({ goals }) => {
    return (
        <ul>
            <Goal goal={goals[0]} />
            { goals.slice(1).map(goal => (
                <div>
                    <hr />
                    <Goal goal={goal} />
                </div>
            )) }
        </ul>
    )
}

export default GoalList;