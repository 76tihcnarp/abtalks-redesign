# ABTalks — 60 Day Coding Challenge

A mobile-first redesign of ABTalks, a 60-day coding challenge platform where students build something every day and submit proof of their progress through GitHub and LinkedIn.

The redesign focuses on making the challenge feel more visual, motivating, and easy to use on mobile.

## Live Demo

https://abtalks-reinvent.netlify.app/

## Repository

(https://github.com/76tihcnarp/abtalks-redesign)

## Route Map

/            =  https://abtalks-reinvent.netlify.app/

/dashboard   =  https://abtalks-reinvent.netlify.app/dashboard

/day/37      =  https://abtalks-reinvent.netlify.app/day/37

## Overview

ABTalks helps students build consistency through a daily coding challenge.

This redesign gives the challenge a visual identity through a **growing plant metaphor**. As students progress through the 60 days, their plant develops through different stages. Missed days are represented by wilted plants, making progress and consistency visible at a glance.

The interface was designed mobile-first for students who may use the platform on their phones after college.

## Main Screens

### Landing Page — `/`

The first experience for a new student.

- Introduces the 60-day challenge
- Explains the daily build-and-submit workflow
- Provides motivation to start the challenge
- Uses the plant concept to establish the visual identity

### Student Dashboard — `/dashboard`

The student's main progress view.

- Current challenge day
- Current streak
- Completed builds
- Challenge standing
- Overall progress
- Today's task
- 60-day visual garden
- Completed, current, locked, and missed days
- Interactive day details popup

### Challenge Day — `/day/12`

The detailed view for an individual challenge day.

- Day-specific plant stage
- Daily task
- Build requirements
- GitHub proof submission
- LinkedIn proof submission
- Submission confirmation state

The day page reads the day number from the URL, so routes such as `/day/12`, `/day/35`, and `/day/50` display the corresponding challenge day and plant stage.

## Design Concept

### The Growing Plant

The main idea behind the redesign is to turn progress into something visual.

Instead of representing 60 days only through numbers or a traditional progress bar, the student's journey is represented as a plant that grows throughout the challenge.

Different stages correspond to different parts of the challenge:

- Days 0–5 — Stage 0
- Days 6–12 — Stage 1
- Days 13–20 — Stage 2
- Days 21–30 — Stage 3
- Days 31–40 — Stage 4
- Days 41–50 — Stage 5
- Days 51–60 — Stage 6
- Day 61 — Final stage

Missed days use a wilted plant to make breaks in consistency immediately visible.

## Key Features

- Mobile-first responsive interface
- 60-day visual progress garden
- Dynamic plant growth based on challenge day
- Current streak tracking
- Challenge standing
- Daily task overview
- Missed-day visualization
- Interactive day information popup
- GitHub proof submission
- LinkedIn proof submission
- Submission confirmation state
- Mocked challenge data

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Git / GitHub

No authentication or production database is used, as these were outside the scope of the challenge.