from flask import Flask, request, jsonify
from flask_cors import CORS

from database import db

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///expenses.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

from models import Expense


@app.route("/")
def home():
    return {"message": "Expense Tracker Backend Running"}


# Create Expense
@app.route("/expenses", methods=["POST"])
def add_expense():

    data = request.get_json()

    expense = Expense(
        title=data["title"],
        amount=data["amount"],
        category=data["category"]
    )

    db.session.add(expense)
    db.session.commit()

    return jsonify({"message": "Expense Added Successfully"})


# Read Expenses
@app.route("/expenses", methods=["GET"])
def get_expenses():

    expenses = Expense.query.all()

    return jsonify([expense.to_dict() for expense in expenses])

# Delete Expense
@app.route("/expenses/<int:id>", methods=["DELETE"])
def delete_expense(id):

    expense = Expense.query.get(id)

    if not expense:
        return jsonify({"message": "Expense not found"}), 404

    db.session.delete(expense)
    db.session.commit()

    return jsonify({"message": "Expense Deleted Successfully"})

# Update Expense
@app.route("/expenses/<int:id>", methods=["PUT"])
def update_expense(id):

    expense = Expense.query.get(id)

    if not expense:
        return jsonify({"message": "Expense not found"}), 404

    data = request.get_json()

    expense.title = data["title"]
    expense.amount = data["amount"]
    expense.category = data["category"]

    db.session.commit()

    return jsonify({"message": "Expense Updated Successfully"})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)