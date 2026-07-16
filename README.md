# 📚 TicQuiz

<div align="center">

### Smart Revision Platform for UADB Students

🚀 Mobile First • 📱 Progressive Web App • ⚡ Fast • 🎓 Academic Learning

</div>

---

## 🎓 Overview

**TicQuiz** is a modern quiz platform designed for students of **Université Alioune Diop de Bambey (UADB)**.

The application allows students to revise their courses through interactive quizzes organized according to the university curriculum. Learners can navigate through departments, academic levels, semesters, subjects, and chapters to access targeted assessments and monitor their progress.

Built with a mobile-first approach, TicQuiz provides a smooth and engaging learning experience across smartphones, tablets, and desktop devices.

---

## 🏛️ Target Institution

**Université Alioune Diop de Bambey (UADB)**

TicQuiz is specifically designed to support students enrolled in UADB academic programs by providing an accessible and interactive revision environment.

---

## ✨ Features

### 🧭 Academic Navigation

* Department selection
* Academic level selection (L1, L2, L3)
* Semester selection
* Subject browsing
* Chapter organization

### 📝 Quiz System

* Multiple-choice questions
* Automatic answer validation
* Instant score calculation
* Quiz timer
* Completion tracking
* Success percentage calculation

### 📈 Student Progress

* Quiz history tracking
* Local performance storage
* Chapter completion monitoring
* Progress visualization

### 📱 Mobile Experience

* Mobile-first design
* Responsive user interface
* Smooth animations
* Optimized touch interactions

### 🚀 Progressive Web App

* Home screen shortcut support
* App-like user experience
* Fast loading times
* Modern browser compatibility

---

# 🛠️ Tech Stack

## 🎨 Frontend

* Next.js 15 (App Router)
* React
* Tailwind CSS
* Framer Motion

## ☁️ Backend & Database

* Supabase

## 💾 State Management & Storage

* React Hooks
* Browser Local Storage
* Custom Secure Storage Layer

## 🎯 UI & Icons

* Lucide React

---

# 🏗️ Project Structure

```text
src/
│
├── app/
│   ├── username/
│   ├── department/
│   ├── levels/
│   ├── subjects/
│   ├── stats/
│   ├── profile/
│   ├── leaderboard/
│   └── ...
│
├── components/
│   ├── BackButton.jsx
│   ├── PwaInstallBanner.jsx
│   └── ...
│
├── screens/
│   ├── DepartmentScreen.jsx
│   ├── LevelScreen.jsx
│   ├── SemesterScreen.jsx
│   └── ...
│
├── data/
│   ├── curriculum/
│   │   ├── d2a/
│   │   └── srt/
│   │
│   └── quizzes/
│       ├── registry.js
│       ├── d2a/
│       └── srt/
│
├── lib/
│   └── supabase.js
│
├── utils/
│   └── secureStorage.js
│
└── assets/
```

---

# 🧠 Quiz Architecture

```text
Department
    ↓
Level
    ↓
Semester
    ↓
Subject
    ↓
Chapter
    ↓
Quiz
```

### Example

```text
D2A
 └── L2
      └── Semester 1
           └── Active Directory
                └── Chapter 1
                     └── Quiz
```

---

# 🔒 Data Persistence

TicQuiz stores student information locally, including:

* Academic path selection
* Quiz scores
* Completion history
* Performance statistics
* Learning progress

Data is encoded through the custom storage utility:

```javascript
utils/secureStorage.js
```

---

# ⚡ Supabase Integration

Supabase is configured through:

```javascript
lib/supabase.js
```

Current and future use cases include:

* Authentication
* Database operations
* User synchronization
* Cloud storage
* Global leaderboards

---

# 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/ticquiz.git
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build production version

```bash
npm run build
```

### Start production server

```bash
npm start
```

---

# 🎨 Design Principles

TicQuiz follows a modern product design philosophy:

* 📱 Mobile-first development
* ✨ Glassmorphism-inspired interface
* ⚡ Fast interactions
* 🎯 Simple navigation
* ♿ Accessibility-focused layouts
* 🧠 Reduced cognitive load

---

# 🔮 Roadmap

### Learning Experience

* [ ] User authentication
* [ ] Cloud synchronization
* [ ] Personalized dashboards
* [ ] Smart recommendations

### Academic Features

* [ ] Teacher dashboard
* [ ] Course management
* [ ] Chapter analytics
* [ ] Advanced statistics

### AI Features

* [ ] AI-generated quizzes
* [ ] Adaptive learning paths
* [ ] Intelligent revision assistant
* [ ] Automated content generation

---

# 👨‍🎓 For UADB Students

TicQuiz was developed to modernize academic revision and provide UADB students with a practical, engaging, and accessible learning tool.

The goal is to make course revision more efficient while encouraging continuous learning through interactive assessments.

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you would like to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Submit a Pull Request

---

# 📄 License

This project was developed for educational purposes and academic support within **Université Alioune Diop de Bambey (UADB)**.

All rights reserved.

---

### 📚 TicQuiz

Learn. Practice. Progress.
