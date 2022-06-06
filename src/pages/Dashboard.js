import { useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

import GoalProgressBar from "../components/goals/GoalProgressBar";
import FinanceChart from "../components/finance/FinanceChart";
import GoalList from "../components/goals/GoalList";
import TransactionList from "../components/finance/TransactionsList";
import FinanceCategories from "../components/finance/FinanceCategories";
import Account from "../components/account/AccountSettings.js";
import { useSelector, useDispatch } from "react-redux";
import PinnedNotes from "../components/notes/PinnedNotes";
import { capitalize } from "../Helpers";
import jwt from "jwt-decode";
import { fetchGoals } from "../actions/fetchGoals";
import { fetchNotes } from "../actions/fetchNotes";
import { fetchTransactions } from "../actions/fetchTransactions";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
    dispatch(fetchNotes());
    dispatch(fetchTransactions());
  }, [dispatch]);

  const notes = useSelector((state) => state.notes);
  const goals = useSelector((state) => state.goals);
  const transactions = useSelector((state) => state.transactions);

  const dateTime = new Date();
  const curHr = dateTime.getHours();
  const today = dateTime.toDateString();
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();

  const greeting = useMemo(() => {
    if (curHr < 12) {
      return "Good Morning";
    } else if (curHr < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }, [curHr]);

  const validDate = useCallback((date) => {
    return date.toString().length === 1 ? "0" + date : date;
  }, []);

  const todaysDate = useMemo(() => {
    return year + "-" + validDate(month) + "-" + validDate(day);
  }, [year, month, day]);

  const isToday = useCallback(
    (goal) => {
      return goal.due_date?.includes(todaysDate);
    },
    [todaysDate]
  );

  const todaysGoals = useMemo(() => {
    return goals.filter(isToday);
  }, [goals, isToday]);

  const sortedGoals = useMemo(() => {
    return todaysGoals.sort((a, b) => b.id - a.id);
  }, [todaysGoals]);

  const completedGoals = useMemo(() => {
    return sortedGoals.filter((goal) => !goal.completed);
  }, [sortedGoals]);

  const incompleteGoals = useMemo(() => {
    return sortedGoals.filter((goal) => !!goal.completed);
  }, [sortedGoals]);

  const renderGoals = useMemo(() => {
    return (
      <>
        {completedGoals.length > 0 && <GoalList goals={completedGoals} />}
        {incompleteGoals.length > 0 && <GoalList goals={incompleteGoals} />}
        <Link to="/goals/new" className="button gyst-button">
          New Goal
        </Link>
      </>
    );
  }, []);

  const sortedNotes = useMemo(() => {
    notes.sort((a, b) => b.id - a.id);
  }, [notes]);

  const sortedTransactions = useMemo(() => {
    transactions.sort((a, b) => b.id - a.id);
  }, [transactions]);

  const renderTransactions = useMemo(() => {
    return transactions.length > 0 ? (
      <TransactionList transactions={sortedTransactions} />
    ) : (
      <Link to="/transactions/new" className="button gyst-button">
        Get your finances together
      </Link>
    );
  }, [transactions, sortedTransactions]);

  const username = jwt(localStorage.getItem("jwt")).user_name;

  return (
    <main id="dashboard">
      <section className="dashboard-left">
        <section id="db-header">
          <div>
            <h3>{today}</h3>
            <h1>
              {greeting}, {capitalize(username)}
            </h1>
          </div>
          <Account />
        </section>
        <section className="finance-charts">
          <FinanceChart type={"expense"} transactions={transactions} />
          <FinanceChart type={"income"} transactions={transactions} />
        </section>
        <section id="transaction-stats">
          <div id="db-finance-categories">
            <FinanceCategories type={"expense"} transactions={transactions} />
            <hr />
            <FinanceCategories type={"income"} transactions={transactions} />
          </div>
          <div id="db-transactions">{renderTransactions}</div>
        </section>
      </section>
      <section className="dashboard-right">
        <div className="dashboard-goals">
          <span>
            <h3>Todays Focus</h3>
            <Link to="/goals/new" className="button">
              +
            </Link>
          </span>
          <GoalProgressBar goals={todaysGoals} />
          {renderGoals}
        </div>
        <div id="db-notes">
          <PinnedNotes notes={sortedNotes} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
