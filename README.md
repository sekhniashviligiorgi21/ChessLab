Markdown
# ♟️ Chesserly

> A free, open-source chess analysis platform that brings deep game reviews, move classifications, and insights straight to your browser without expensive monthly subscriptions.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-chesserly.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://chesserly.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 🌟 Overview

**Chesserly** was built to make high-quality chess analysis accessible to everyone. Instead of paying for gated game reviews, Chesserly lets you import games from major platforms, run local Stockfish analysis, explore openings, and track your performance over time.

Because analysis runs client-side via WebAssembly, your server costs stay minimal and analysis speed stays blisteringly fast.

---

## ✨ Features

- 📥 **Flexible Imports:** Load games directly by username from **Chess.com** or **Lichess**, or paste any raw PGN.
- 📊 **Deep Game Reports:** Get full accuracy scores, move-by-move classifications (*Brilliant, Great, Best, Blunder, Inaccuracy*), and an estimated performance rating.
- 📖 **Openings Explorer:** Integrated Lichess opening database directly alongside the board.
- 📈 **Performance Insights:** Track your game history over time to spot recurring positional or tactical mistakes.
- ⚡ **Local WebAssembly Engine:** Stockfish executes in your browser—no backend queuing or rate limits.

---

## 🛠️ Tech Stack

- **Frontend:** Vue.js, WebAssembly (WASM)
- **Engine:** Stockfish WASM
- **Backend:** FastAPI (Python)
- **Database & Auth:** Firebase
- **Hosting:** Vercel

---

## 🚀 Getting Started

Follow these steps to run Chesserly locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Python](https://www.python.org/) (3.10 or higher)
- `npm` or `pnpm`

---

### 1. Repository Setup

```bash
git clone [https://github.com/your-username/chesserly.git](https://github.com/your-username/chesserly.git)
cd chesserly
2. Frontend Setup (Vue.js)
Bash
# Navigate to frontend directory (if separated)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
The frontend should now be running at http://localhost:5173.

3. Backend Setup (FastAPI)
Bash
# Navigate to backend directory
cd backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn main:app --reload
The API should now be live at http://localhost:8000.

🗺️ Roadmap
[ ] Custom Tactics Puzzles: Generate tactical puzzles built directly from your blunder history.

[ ] Grandmaster AI Bots: Play against custom engine personalities modeled after historic Grandmasters.

[ ] Export & Share: Export styled game review summary cards as images to share with friends.

🤝 Contributing
Contributions are welcome! Whether it's fixing bugs, improving documentation, or proposing new features:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for details.

🙏 Acknowledgments
Lichess API for opening database integration and PGN utilities.

Stockfish 17.1-lite-single for open-source engine evaluation.
