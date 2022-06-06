import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postGoal } from "../../actions/postGoal";
import { patchGoal } from "../../actions/patchGoal";
import { userId, date } from "../../Helpers";
import { useNavigate } from "react-router-dom";
import { deleteGoal } from "../../actions/deleteGoal";
import { useParams } from "react-router-dom";

function GoalForm() {
  const goalData = useSelector((state) => state.goals);

  const { id } = useParams();

  const goal = useMemo(() => {
    return id && goalData.find((goal) => goal.id === parseInt(id));
  }, [goalData, id]);

  const [state, setState] = useState(null);

  useEffect(() => {
    if (goal) {
      setState({
        label: goal.label || "",
        priority: goal.priority || "low",
        dueDate: goal.due_date || date(),
      });
    }
  }, [setState, goal, id]);

  const handleChange = useCallback(
    (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    },
    [state, setState]
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addGoal = useCallback(() => {
    if (goal) {
      dispatch(
        patchGoal({
          ...goal,
          label: state.label,
          priority: state.priority,
          due_date: state.dueDate,
        })
      );
    } else {
      dispatch(
        postGoal({
          user_id: userId,
          label: state.label,
          due_date: state.dueDate,
          priority: state.priority,
          completed: false,
        })
      );
      setState({
        label: "",
        priority: "low",
        dueDate: date(),
      });
    }
  }, [goal, dispatch, patchGoal, state, postGoal, setState, userId])

  return (
    <div className="form">
      <input
        type="text"
        onChange={handleChange}
        name="label"
        value={state?.label}
        placeholder="Goal"
      />
      <input
        type="datetime-local"
        onChange={handleChange}
        name="dueDate"
        value={state?.dueDate}
        min={state?.dueDate}
      />
      <div>
        <select onChange={handleChange} value={state?.priority} name="priority">
          <option value="none" disabled>
            Priority
          </option>
          <option value="low">Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
        </select>
        {goal ? (
          <button
            onClick={() => {
              dispatch(deleteGoal(goal));
              navigate("/goals", { replace: true });
              window.location.reload();
            }}
            className="submit"
          >
            Delete
          </button>
        ) : null}
        <button onClick={addGoal} className="submit">
          {!goal ? "Submit" : "Save"}
        </button>
      </div>
    </div>
  );
}

export default GoalForm;
