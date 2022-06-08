import { reducer, capitalize } from "../../Helpers";
import { useMemo, useCallback } from "react";

const FinanceChart = ({ transactions, type }) => {
  const dateTime = new Date();
  const day = dateTime.getDay();

  const amounts = useMemo(() => {
    const byDirection = (transaction) => transaction.direction === type;
    const filteredTransactions = transactions.filter(byDirection);

    const weekday = (count) => {
      const date = dateTime.getDate() - count;
      const month = dateTime.getMonth() + 1;
      const year = dateTime.getFullYear();
      const validDate = (num) => {
        if (num.toString().length === 1) {
          return "0" + num;
        } else {
          return num;
        }
      };
      return `${year}-${validDate(month)}-${validDate(date)}`;
    };

    const byDay = (count) => {
      return filteredTransactions.filter((transaction) => {
        return transaction.created_at.includes(weekday(count));
      });
    };

    const weeklyValues = [
      byDay(6),
      byDay(5),
      byDay(4),
      byDay(3),
      byDay(2),
      byDay(1),
      byDay(0),
    ];

    return weeklyValues.map((transactions) => {
      const tv = transactions.map((transaction) =>
        parseFloat(transaction.amount)
      );
      return tv.length > 0 ? tv.reduce(reducer) : 0;
    });
  }, [transactions, dateTime, type]);

  const dailyLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const adjustedLabels = useMemo(() => {
    return dailyLabels.slice(day).concat(dailyLabels.slice(0, day));
  }, [dailyLabels, day]);

  const calcPercent = useCallback((num) => {
    return (num / Math.max(...amounts.map((a) => parseInt(a)))) * 100;
  }, [amounts]);

  return (
    <div>
      <h2>
        {type === "expense" ? "💸" : "🤑"} {capitalize(type)}
      </h2>
      <p>${Number.parseFloat(amounts.reduce(reducer)).toFixed(2)}</p>
      <ul>
        {adjustedLabels.map((day, i) => {
          return (
            <li>
              <hr
                className="chart-hr"
                style={{ height: `${calcPercent(amounts[i])}%` }}
              />
              {day}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FinanceChart;
