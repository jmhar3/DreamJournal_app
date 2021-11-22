const Dashboard = () => {
    const today = new Date()
    const curHr = today.getHours()

    function greeting() {
        if (curHr < 12) {
            return 'Good Morning'
        } else if (curHr < 18) {
            return 'Good Afternoon'
        } else {
            return 'Good Evening'
        }
    }

    return (
      <div id="dashboard">
        <section id="dashboard-left">
            <h3>{ Date() }</h3>
            <h1>{ greeting() }</h1>
            <div id="finance">
                <h1>Finance Charts</h1>
            </div>
            <div id="db-finance-goals">
                <h1>Finance Goals</h1>
            </div>
            <div id="upcoming-payments">
                <h1>Upcoming Payments</h1>
            </div>
        </section>
        <section id="dashboard-right">
            <div id="db-goals">
                <h1>Goals</h1>
            </div>
            <div>
                <h1>Notes</h1>
            </div>
        </section>
      </div>
    )
  }
  
  export default Dashboard;