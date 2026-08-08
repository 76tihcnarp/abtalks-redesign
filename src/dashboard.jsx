import './dashboard.css'
import { useState } from 'react'

import empty from './assets/empty.png'
import bloom from './assets/bloom.png'
import wilt from './assets/wilt.png'
import sapling from './assets/sapling.png'

function Dashboard() {
    const [field, setField] = useState(1)
const [selectedDay, setSelectedDay] = useState(null)

const currentDay = 27
const totalDays = 60
const completedDays = currentDay - 1
const progress = (currentDay / totalDays) * 100

const currentStreak = 7
const standing = 18

    const getDayStatus = (day) => {
  if (day < 27) return 'Completed'
  if (day === 27) return 'Current'
  return 'Locked'
}
  return (
    
        
      
    <main className="dashboard">
<header className="dashboard-header">
    <img
  src="/src/assets/logo.png"
  alt="ABTALKS"
  className="abtaks-logo"
/>
</header>
      <header className="dashboard-header">
        <div>
          <p>YOUR JOURNEY</p>
          <h1>Your garden is</h1><h1 className='okay'> growing.</h1>
        </div>

        <div className="day-count">


          <strong>{currentDay}</strong>
<span>/ {totalDays} days</span>
        </div>
      </header>

    <div className="progress-section">
  <div className="progress-info">
    <span>YOUR PROGRESS</span>
    <span>{Math.round(progress)}%</span>
  </div>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{ width: `${progress}%` }}
    />
  </div>
</div>

<section className="dashboard-summary">

  <div className="today-card">
    <div>
      <p>TODAY'S FOCUS</p>
      <h2>Build a responsive dashboard</h2>
      <span>Day {currentDay}  · Keep your streak alive.</span>
    </div>

    <button
      onClick={() => setSelectedDay(currentDay) }
    >
      →
    </button>
  </div>

  <div className="stats-row">

    <div className="stat-card">
      <span>CURRENT STREAK</span>
      <strong>{currentStreak}</strong>
      <small>days</small>
    </div>

    <div className="stat-card">
      <span>BUILDS</span>
      <strong>{completedDays}</strong>
      <small>completed</small>
    </div>

    <div className="stat-card">
      <span>STANDING</span>
      <strong>#{standing}</strong>
      <small>this challenge</small>
    </div>

  </div>

</section>

      <section className="garden">

        <div className="garden-title">
          <div>
            <p>FIELD 0{field}</p>
            <h2> Days {field === 1 ? '1 — 30' : '31 — 60'}</h2>
          </div>

          <button onClick={() => setField(field === 1 ? 2 : 1)}>→</button>
        </div>

        <div className="garden-grid">
  {Array.from({ length: 30 }, (_, index) => {
    const day = field === 1 ? index + 1 : index + 31
    let status = 'Locked'

if (day < 27) {
  status = 'Completed'
} else if (day === 27) {
  status = 'Current'
}

    let image = empty

    if (day < 27) {
      image = bloom
    } else if (day === 27) {
      image = sapling
    }

    return (
      <div
  className="day-cell"
  key={day}
  onClick={() => setSelectedDay(day)}
>
        <img src={image} alt="" />
        <span className="day-number">{day}</span>
        
      </div>
    )
  })}
</div>

      </section>
{selectedDay && (
 <div
  className="day-popup-overlay"
  onClick={() => setSelectedDay(null)}
>
   <div
  className="day-popup"
  onClick={(e) => e.stopPropagation()}
>
      <button
        className="popup-close"
        onClick={() => setSelectedDay(null)}
      >
        ×
      </button>

      <p>DAY {selectedDay}</p>

      <h2>Day {selectedDay}</h2>

      <div className={`popup-status ${getDayStatus(selectedDay).toLowerCase()}`}>
          {getDayStatus(selectedDay)}
      </div>

      <div className="popup-build">
        <span>WHAT YOU BUILT</span>
        <h3>Your work for Day {selectedDay}</h3>
        <p>
          Your project progress for this day will appear here.
        </p>
      </div>
    </div>
  </div>
)}
<section className="dashboard-quote">
  <p>
    “You don't have to grow fast. You just have to keep growing.”
  </p>
  <span>— ABTALKS</span>
</section>
    </main>
  )
}

export default Dashboard