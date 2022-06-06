import { useCallback, useMemo } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const GoalProgressBar = ({ goals }) => {
  const isCompleted = useCallback((goal) => {
    return goal.completed === true;
  }, []);

  const filterComplete = useMemo(() => {
    return goals.filter(isCompleted);
  }, [goals, isCompleted]);

  const checkPriority = useCallback(( priorityRating) => {
    return goals.filter((goal) => {
      return goal.priority === priorityRating;
    });
  }, [goals]);

  const lowPriority = checkPriority(filterComplete, "low");
  const midPriority = checkPriority(filterComplete, "mid");
  const highPriority = checkPriority(filterComplete, "high");

  const checkProgress = useCallback((priority) => {
    return (priority.length / goals.length) * 100;
  }, [goals])

  if (
    lowPriority.length !== 0 ||
    midPriority.length !== 0 ||
    highPriority.length !== 0
  ) {
    return (
      <ProgressBar>
        <ProgressBar
          variant="success"
          now={checkProgress(lowPriority)}
          key={1}
        />
        <ProgressBar
          variant="warning"
          now={checkProgress(midPriority)}
          key={2}
        />
        <ProgressBar
          variant="danger"
          now={checkProgress(highPriority)}
          key={3}
        />
      </ProgressBar>
    );
  } else {
    return null;
  }
};

export default GoalProgressBar;
