import ProgressBar from 'react-bootstrap/ProgressBar';

const GoalProgressBar = ({goals}) => {
    const isCompleted = (goal) => goal.completed === true;

    const filterComplete = goals.filter(isCompleted)

    function checkPriority(goals, priorityRating){
        return goals.filter(function(goal) {
            return goal.priority === priorityRating;
        })
    }

    const lowPriority = checkPriority(filterComplete, 'low')
    const midPriority = checkPriority(filterComplete, 'mid')
    const highPriority = checkPriority(filterComplete, 'high')

    const checkProgress = (priority) => {
        return (priority.length / goals.length) * 100
    }

    return (
        <ProgressBar>
            <ProgressBar variant="success" now={checkProgress(lowPriority)} key={1} />
            <ProgressBar variant="warning" now={checkProgress(midPriority)} key={2} />
            <ProgressBar variant="danger" now={checkProgress(highPriority)} key={3} />
        </ProgressBar>
    )
}

export default GoalProgressBar;