import { Link } from "react-router-dom";

const Goal = ({goal}) => {
    return (
        <li>
            <h1>{goal}</h1>
            {/* <input type="checkbox" />
            <div className="goal-label">
                <h5>{goal.label}</h5>
                <p className="label">{goal.due_date}</p>
            </div>
            <div className={`priority-indicator ${goal.priority}`}></div> */}
        </li>
    )
}

export default Goal;