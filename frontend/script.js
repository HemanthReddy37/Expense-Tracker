async function loadExpenses() {

    const response = await fetch("http://127.0.0.1:5000/expenses");

    const data = await response.json();

    let total=0;

    const table = document.getElementById("expenseTable");

    table.innerHTML = "";

    data.forEach(expense => {

        total+=expense.amount;

        table.innerHTML += `
        <tr>

            <td>${expense.title}</td>

            <td>₹${expense.amount}</td>

            <td>${expense.category}</td>

            <td>

    <button
        class="editBtn"
        onclick="editExpense(
            ${expense.id},
            '${expense.title}',
            ${expense.amount},
            '${expense.category}'
        )">

        Edit

    </button>

    <button
        class="deleteBtn"
        onclick="deleteExpense(${expense.id})">

        Delete

    </button>

</td>

        </tr>
        `;
    });
    document.getElementById("totalAmount").innerText = "₹" + total;

document.getElementById("totalEntries").innerText = data.length;

}

async function addExpense(){

    const title = document.getElementById("title").value;

    const amount = document.getElementById("amount").value;

    const category = document.getElementById("category").value;

    const data = {

        title,
        amount: Number(amount),
        category

    };

    if(editingId === null){

        await fetch("http://127.0.0.1:5000/expenses",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

    }else{

        await fetch(`http://127.0.0.1:5000/expenses/${editingId}`,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        editingId = null;

    }

    document.getElementById("title").value = "";

    document.getElementById("amount").value = "";

    document.getElementById("category").value = "";

    loadExpenses();

}

let editingId = null;

function editExpense(id, title, amount, category){

    editingId = id;

    document.getElementById("title").value = title;

    document.getElementById("amount").value = amount;

    document.getElementById("category").value = category;

}

async function deleteExpense(id) {

    await fetch(`http://127.0.0.1:5000/expenses/${id}`, {
        method: "DELETE"
    });

    loadExpenses();
}

// Load all expenses when the page opens
loadExpenses();