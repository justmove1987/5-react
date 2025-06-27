# 🧭 Onboarding Tutorial App (React + TypeScript)

This project is a simple multi-step onboarding experience built using **React** and **TypeScript**. It displays a series of cards with an image, title, and description, and allows users to navigate forward and backward through each step. The app includes animations, responsive design, and dynamic indicators.

## 📦 Features

- React + TypeScript based SPA
- Multi-step navigation (`Next` / `Previous` buttons)
- Animated transitions using **Framer Motion**
- Dynamic step indicator with active highlighting
- Responsive layout (mobile-first)
- Styled using plain CSS (`Card.css`)

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/justmove1987/5-react.git
cd onboarding-app
```

### 2.Install dependencies
bash
npm install


### 3. Run the development server
bash
npm run dev   # or npm start if using Create React App


### 4. Build for production
bash
npm run build


## 🧩 Project Structure
bash
/src
├── assets/               # Images for each step
├── App.tsx               # Main logic and state
├── Card.tsx              # UI component for each onboarding step
├── Card.css              # Styling for Card
├── Indicator.tsx         # Step indicator using styled-components
├── main.tsx              # Entry point
└── index.css             # Global styles


## 🛠 Technologies
React
TypeScript
Framer Motion
Styled Components
CSS (Media Queries for responsiveness)