import Goal from './GoalItem.js';

const GoalList = ({goals}) => {
    return (
        <ul>
            <Goal goal={goals[0]} />
            { goals > 1 ? (
                <>
                    { goals.map(goal => (
                        <>
                            <Goal goal={goal} />
                            <hr/>
                        </>
                    )) }
                </>
            ) : null}
            
        </ul>
    )
}

export default GoalList;