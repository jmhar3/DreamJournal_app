import { Link } from "react-router-dom";

const GoalList = ({goals}) => {
    return (
        <ul>
            <li>
                <input type="checkbox" />
                <div className="goal-label">
                    <h5>{goals} Read a book</h5>
                    <p className="label">03.12.21 13:00</p>
                </div>
                <div className="priority-indicator high"></div>
            </li>
            <hr />
            <li>
                <input type="checkbox" />
                <div className="goal-label">
                    <h5>Read a book</h5>
                    <p className="label">🔄 21.12.21 18:00</p>
                </div>
                <div className="priority-indicator norm"></div>
            </li>
            <hr />
            <li>
                <input type="checkbox" />
                <div className="goal-label">
                    <h5>Read a book</h5>
                    <p className="label">🔄 15.12.21 11:00</p>
                </div>
                <div className="priority-indicator low"></div>
            </li>
            <hr />
        </ul>
    )
}

export default GoalList;