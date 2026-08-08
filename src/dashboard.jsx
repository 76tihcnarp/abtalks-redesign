import './dashboard.css';

function dashboard() {
  return (
    <main className="dashboard">
      <p>YOUR JOURNEY</p>
      <h1>Your garden is growing.</h1>

      <div className="progress">
        <strong>27</strong>
        <span> / 60 days</span>
      </div>
    </main>
  )
}

export default dashboard;