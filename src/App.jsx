import './App.css'
import Dashboard from './dashboard'

function App() {
  if (window.location.pathname === '/dashboard') {
    return <Dashboard />
  }

  return (
    <main className="landing">
      <header className="navbar">
        <img src="/src/assets/logo.png" alt="ABTalks" className="logo" />
      </header>

      <section className="hero">
        <p className="eyebrow">60 DAYS · ONE COMMITMENT</p>

        <h1>
          Start small.
          <br />
          <span>Plant the habit.</span>
          <br />
          Grow the skill.
        </h1>

        <p className="description">
          One build. One day. One step closer to the developer you're becoming.
        </p>

        <button className="start-button">
          Plant your first day <span>→</span>
        </button>
      </section>

      <section className="plant-preview">
        <img src="/src/assets/stage1.png" />
      </section>

      <section className="stats">
        <div>
          <strong>60</strong>
          <span>DAYS</span>
        </div>

        <div>
          <strong>1</strong>
          <span>BUILD / DAY</span>
        </div>

        <div>
          <strong>2</strong>
          <span>PROOFS / DAY</span>
        </div>
      </section>

      <section className="about-card">
  <div className="about-card-content">
    <p className="about-label">THE IDEA</p>

    <h2>A 60-day challenge to build in public.</h2>

    <p>
      Pick a track. Build something every day. Share your progress.
      Watch a small habit grow into something you can be proud of.
    </p>
  </div>

  <div className="about-card-number">
    <span>60</span>
    <small>DAYS</small>
  </div>
</section><br />
 <p className="description">
         You don't have to bloom on day one.
        </p><br /><br />
    </main>
  )
}

export default App