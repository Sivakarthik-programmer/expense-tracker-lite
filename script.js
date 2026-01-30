let expenses = [
  { name: "Food", amount: 120 },
  { name: "Travel", amount: 300 },
  { name: "Snacks", amount: 50 }
];

function renderExpenses() {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";

  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.innerText = `${expense.name} - ₹${expense.amount}`;
    list.appendChild(li);
  });
}

// Run when page loads
renderExpenses();
