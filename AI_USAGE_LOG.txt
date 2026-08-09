ABTalks Redesign — AI Usage Log

Project: ABTalks 60-Day Coding Challenge Redesign

AI tools used:
- ChatGPT
- Gemini

--------------------------------------------------
2026-08-07
--------------------------------------------------

[Friday 8:25 PM] — ChatGPT
- Discussed the initial dashboard structure and layout.

[Friday 11:14 PM] — ChatGPT
- Worked through React component and CSS implementation.
- Debugged dashboard routing and responsive layout issues.

--------------------------------------------------
2026-08-08
--------------------------------------------------

[11:40 AM] — Gemini
- Generated/reworked visual concepts for the dashboard game-style tiles.

[14:34] — ChatGPT
- Refined dashboard UI and responsive styling.
- Added interactive day tiles and day-selection popup.
- Added missed-day states using wilted plant visuals.
- Worked on dashboard statistics, progress and visual polish.

[16:37 PM] — Gemini
- Generated/reworked plant/game tile assets based on the visual direction.

[18:09 PM] — ChatGPT
- Built/refined the Challenge Day experience.
- Implemented URL-based day detection.

[21:21 PM] — ChatGPT
🌱 Fixed dashboard day popup — clicking a day now opens the popup correctly.
🧩 Fixed getDayStatus() — Completed, Current, Missed, and Locked states now work.
🛣️ Checked routing — /, /dashboard, and /day/... pages are loading through the existing window.location.pathname setup.
📅 Found DayPage issue — it was hardcoded to one day (37), so /day/12 etc. showed Day 37.
🔧 Next fix — make DayPage read the number from the URL, then move on to edge cases → AI Log → final testing/deployment.

--------------------------------------------------
2026-08-09
--------------------------------------------------

[13:02 PM] — ChatGPT
- Debugged plant-stage selection so different challenge-day URLs display the correct plant.
- Added GitHub and LinkedIn proof-of-work submission states.
- Reviewed the three required routes and submission requirements.
- Prepared README and submission documentation.

--------------------------------------------------
Human Contribution: The project was not generated entirely by AI.
--------------------------------------------------

- Chose the overall concept and visual direction.
- Chose the growing-plant metaphor for the 60-day challenge.
- Decided how plant stages correspond to challenge progress.
- Designed the overall structure of the three required screens.
- Implemented and integrated the React components.
- Implemented and modified the CSS.
- Integrated and selected visual assets.
- Tested the application at the required 390px mobile viewport.
- Tested the application on desktop.
- Identified bugs and UI problems during testing.
- Decided which AI suggestions to keep, modify, or reject.
- Performed the final integration and testing.