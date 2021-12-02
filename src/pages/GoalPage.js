import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const GoalPage = ({goals}) => {
    var goals;
    if (goals.length !== 0) {
        goals = <GoalList goals={goals} />
    } else {
        goals = <Link to="/goalpage" className="button">Get your sh*t together</Link>
    }
    
    return (
        <div id="goal-db" >
            <section className="dashboard-left">
                <h1>Create Goal</h1>
                <GoalForm />
            </section>
            <section className="dashboard-right ">
                <div className="dashboard-goals">
                    <h2>Upcoming Goals</h2>
                    {goals}
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return { goals: state.goals }
}
  
export default connect(mapStateToProps)(GoalPage);