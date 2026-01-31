# LifeLine AI 🚑
## Offline Emergency Response Assistant

**LifeLine AI** is an offline-first emergency response assistant designed to guide users through life-threatening situations when connectivity is unavailable. It combines lightweight on-device AI, a panic-friendly interface, and real-time step-by-step instructions to ensure anyone can respond quickly in critical emergencies.

---

## Table of Contents
1. [Inspiration](#inspiration)
2. [Problem Statement](#problem-statement)
3. [Solution](#solution)
4. [Key Features](#key-features)
5. [Architecture](#architecture)
6. [Technical Stack](#technical-stack)
7. [How We Built It](#how-we-built-it)
8. [Challenges We Faced](#challenges-we-faced)
9. [Accomplishments](#accomplishments)
10. [What We Learned](#what-we-learned)
11. [Future Work](#future-work)
12. [Contribution](#contribution)
13. [Demo](#demo)
14. [Screenshots](#screenshots)
15. [How to Run](#how-to-run)
16. [License](#license)

---

## Inspiration

LifeLine AI was inspired by real-world emergencies where connectivity is unreliable, but immediate guidance is critical. We wanted to create a tool that works **even offline**, to empower users during accidents, medical crises, and natural disasters.  

We noticed that most existing apps fail exactly when needed, and we aimed to **bridge that gap** with a reliable, easy-to-use, and impactful AI solution.

---

## Problem Statement

Emergency situations are often chaotic and stressful. Time-sensitive decisions must be made, but users may lack knowledge or guidance. Traditional apps assume internet availability, which is not guaranteed.  

Key issues:
- Delays in emergency response
- Panic and confusion
- Internet dependency
- Lack of intuitive guidance

\[
\text{Critical Response Time} = \text{Detection Time} + \text{Instruction Time}
\]

Reducing this time is LifeLine AI's core goal.

---

## Solution

LifeLine AI works offline to classify emergencies and provide **step-by-step actionable instructions**. It ensures guidance is clear, visual, and accessible under stress. Optional SOS alerts send location info when connectivity exists, but offline functionality is guaranteed.

---

## Key Features

1. **Offline Emergency Detection** — AI model runs locally  
2. **Step-by-Step Guidance** — Instructions optimized for high stress  
3. **Panic-Friendly UI** — Large buttons, minimal text  
4. **Optional SOS** — Sends alerts when internet is available  
5. **Expandable Modules** — Add more emergencies in future  

---

## Architecture

- **Frontend:** React application for responsive interface  
- **Backend:** FastAPI optional server for SOS alerts  
- **Model:** TensorFlow Lite + scikit-learn offline classifier  
- **Database:** SQLite for offline storage  
- **Demo/Media:** Screenshots, videos in respective folders  

Offline architecture ensures low latency:

\[
\text{Response Time} = \text{Local Detection} + \text{Instruction Delivery}
\]

---

## Technical Stack

Python, TensorFlow Lite, scikit-learn, React, FastAPI, SQLite, GitHub, Markdown  

---

## How We Built It

- Collected emergency scenarios and datasets
- Preprocessed data for lightweight ML
- Built offline classifier
- Designed UI for stress situations
- Integrated backend for optional online alerts
- Tested extensively under offline conditions

---

## Challenges We Faced

1. Optimizing offline ML  
2. Designing intuitive, stress-proof UI  
3. Balancing model accuracy vs speed  
4. Creating realistic offline guidance

---

## Accomplishments

- Fully functional offline AI emergency assistant  
- Panic-friendly UI with large buttons  
- Lightweight, reliable on-device ML  
- Professional GitHub repo + documentation

---

## What We Learned

- Importance of offline-first AI  
- User-centered design for high-stress scenarios  
- Lightweight ML optimization  
- Responsible tech for social impact  

---

## Future Work

- Multilingual instructions  
- Wearable sensor integration  
- Expand emergency categories  
- Collaborate with medical experts  

---

## Contribution

Led end-to-end development: ideation, system architecture, ML integration, frontend/backend, UI/UX, testing, documentation, demo preparation.

---

## Demo

See `demo/demo.mp4` for the full 2–3 minute demo showing offline functionality.

---

## Screenshots

See `screenshots/` folder: home screen, emergency detection, guidance steps.

---

## How to Run

1. Clone repository  
2. `cd backend` → `pip install -r requirements.txt`  
3. `uvicorn main:app --reload`  
4. Start frontend via `npm start`  
5. Test offline mode via airplane mode  

---

## License

MIT License
