# Expense Tracker

A full-stack Expense Tracker web application built using **Flask** for the backend and **HTML, CSS, and JavaScript** for the frontend. The application allows users to manage their daily expenses through a simple and intuitive interface by performing CRUD (Create, Read, Update, Delete) operations.

---

## Features

- Add new expenses
- View all recorded expenses
- Update existing expense details
- Delete expenses
- RESTful API built with Flask
- Cross-Origin Resource Sharing (CORS) enabled
- SQLite database for persistent storage

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask
- Flask-CORS
- Flask-SQLAlchemy

### Database
- SQLite

---

## Project Structure

```
Expense-Tracker/
│
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   ├── expenses.db
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Check if backend is running |
| GET | `/expenses` | Retrieve all expenses |
| POST | `/expenses` | Add a new expense |
| PUT | `/expenses/<id>` | Update an existing expense |
| DELETE | `/expenses/<id>` | Delete an expense |

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Expense-Tracker.git
```

### 2. Navigate to the backend directory

```bash
cd Expense-Tracker/backend
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Flask server

```bash
python app.py
```

The backend will start at:

```
http://127.0.0.1:5000
```

---

## Future Enhancements

- User Authentication
- Expense Categories with Icons
- Monthly Expense Reports
- Data Visualization using Charts
- Budget Tracking
- Search and Filter Expenses
- Export Expenses to CSV/PDF

---

## Author

**Hemanth Reddy Bhavanam**

GitHub: https://github.com/your-username
