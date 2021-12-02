import { Link } from "react-router-dom";

const Goal = ({goal}) => {
    return (
        <li>
            <input type="checkbox" />
            <div className="goal-label">
                <h5>{goal[0]}</h5>
                <p className="label">{goal[1]}</p>
            </div>
            <div className={`priority-indicator ${goal[2]}`}></div>
        </li>
    )
}

export default Goal;