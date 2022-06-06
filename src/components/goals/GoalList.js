import Goal from "./GoalItem.js";

const GoalList = ({ goals }) => {
  return (
    <ul>
      <Goal goal={goals[0]} />
      {goals.length > 1 && (
        <>
          {goals.slice(1).map((goal) => (
            <>
              <hr />
              <Goal goal={goal} />
            </>
          ))}
        </>
      )}
    </ul>
  );
};

export default GoalList;
