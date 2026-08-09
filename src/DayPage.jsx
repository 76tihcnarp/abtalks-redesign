import './day-page.css'
import { useState } from 'react'

import stage0 from './assets/stage0.png'
import stage1 from './assets/stage1.png'
import stage2 from './assets/stage2.png'
import stage3 from './assets/stage3.png'
import stage4 from './assets/stage4.png'
import stage5 from './assets/stage5.png'
import stage6 from './assets/stage6.png'
import finalPlant from './assets/final.png'

function DayPage() {
    
    const [submitted, setSubmitted] = useState(false)
const [github, setGithub] = useState('')
const [linkedin, setLinkedin] = useState('')
   const path = window.location.pathname
const requestedDay = Number(path.split('/').pop())
const day = Math.min(Math.max(requestedDay, 1), 60)
const challengeFinished = day === 60

const getPlantStage = (day) => {
  if (day <= 4) return stage0
  if (day <= 12) return stage1
  if (day <= 20) return stage2
  if (day <= 30) return stage3
  if (day <= 40) return stage4
  if (day <= 50) return stage5
  if (day <= 59) return stage6
  return finalPlant
}

const plantImage = getPlantStage(day)
  return (
    <main className="day-page">
            <header>
        <img src="/src/assets/logo.png" alt="ABTalks" className='logot' />
      </header>
      <header className="day-header">
        <span>ABTALKS · 60 DAY CHALLENGE</span>

<p>DAY {day} / 60</p>

<h1>
  {challengeFinished
    ? <>You did it.<br />You grew.</>
    : <>Build something<br />worth showing.</>
  }
</h1>

<div className="day-status">
  {challengeFinished ? 'CHALLENGE COMPLETE' : 'CURRENT DAY'}
</div>
      </header>


      <section className="day-plant">
  <div className="plant-art">
    <img src={plantImage} alt="Your plant" />
  </div>

  <div className="plant-info">
    {challengeFinished ? 'Plant Has Fully Blossomed' : "Plant Is Growing Well"}
    <p>Day {day} · Stage {day <= 4 ? 0 : day <= 12 ? 1 : day <= 20 ? 2 : day <= 30 ? 3 : day <= 40 ? 4 : day <= 50 ? 5 : 6}</p>
  </div>

</section>


 <section className="day-task">

  <span>
    {challengeFinished ? 'YOU MADE IT' : "TODAY'S TASK"}
  </span>
<br />
  {challengeFinished && (
    <p className="completion-message">
      60 days. 60 builds. You showed up and finished the challenge.
      Your garden has grown all the way.
    </p>
  )}

  <h2>
    {challengeFinished
      ? 'You completed the 60-day challenge.'
      : 'Build your first responsive dashboard.'
    }
  </h2>

  {!challengeFinished && (
    <>
      <p>
        Turn your progress into a simple dashboard that
        someone can understand within a few seconds.
      </p>

      <div className="task-list">
        <div>✓ Create a clear dashboard layout</div>
        <div>✓ Make it mobile-first and responsive</div>
        <div>✓ Show at least 3 meaningful sections</div>
        <div>✓ Add one interactive element</div>
        <div>✓ Deploy your work</div>
      </div>

       <section className="proof-section">

        <div className="section-heading">
         
          {challengeFinished
  ? 'Your 60-day journey is complete.'
  : 'Submit both before completing the day.'}
        </div>
<br />

 <center><span>PROOF OF WORK</span> </center><br />

        <div className="proof-card">
          <div>
            <strong>GitHub</strong>
            <p>Repository or commit URL</p>
          </div>

         <input
  type="url"
  placeholder="https://github.com/..."
  value={github}
  onChange={(e) => setGithub(e.target.value)}
/>
        </div>


        <div className="proof-card">
          <div>
            <strong>LinkedIn</strong>
            <p>Your progress post</p>
          </div>

          <input
  type="url"
  placeholder="https://linkedin.com/..."
  value={linkedin}
  onChange={(e) => setLinkedin(e.target.value)}
/>
        </div>


        <button
  className="submit-proof"
 onClick={() => {
  if (github && linkedin) {
    setSubmitted(true)
  }
}}
>
  Submit proof →
</button>

    {submitted && (
  <div className="submission-success">
    <strong>✓ DAY {day} COMPLETED</strong>

    <p>Your proof has been submitted.</p>

    <div>
      <span>GitHub ✓</span>
      <span>LinkedIn ✓</span>
    </div>

    <small>Your garden has grown.</small>
  </div>
)}

      </section>
    </>
  )}

</section>


     

    </main>
  )
}

export default DayPage