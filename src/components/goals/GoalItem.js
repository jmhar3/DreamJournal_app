import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { patchGoal } from "../../actions/patchGoal";

const Goal = ({ goal }) => {
  const dispatch = useDispatch();
  const { completed, label, id, priority, due_date } = goal;

  const completeGoal = useCallback(() => {
    dispatch(
      patchGoal({
        ...goal,
        completed: completed === null ? true : !completed,
      })
    );
  }, [dispatch, patchGoal, goal]);

  return (
    <li>
      <div onClick={completeGoal} className="checkbox">
        {completed && <h3>✓</h3>}
      </div>
      <div className="goal-label" key={id}>
        {completed ? (
          <s style={{ color: "var(--dark)" }}>
            <Link to={`/goals/${id}/edit`}>{label}</Link>
          </s>
        ) : (
          <Link to={`/goals/${id}/edit`}>{label}</Link>
        )}
        <p className="label">{due_date?.replace("T", " ")}</p>
      </div>
      {completed ? null : (
        <div className={`priority-indicator ${priority}`}></div>
      )}
    </li>
  );
};

export default Goal;
