
let budgetValue = 0;
let averageExpenses = 0;
let totalExpensesValue = 0;

let expenseEntries = [
    ["groceries", 33 ],
    ["restaurants", 50 ],
    ["transport", 12 ],
    ["home", 70 ],
    ["subscriptions", 12 ],
    ["groceries", 28 ],
    ["subscriptions", 12 ]
];

for(let )


function calculateAverageExpense(){
    if(expenseEntries.length === 0){
        return 0;
    } else {

        totalExpensesValue = 0;

    for(let expense of expenseEntries){
        totalExpensesValue += expense[1];
        console.log(`Valor total de los gastos: ${totalExpensesValue}`);
    }
    }
         return totalExpensesValue / expenseEntries.length;
}
    

function calculateBalance(){

}
