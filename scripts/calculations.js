
let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
    ["groceries", 33 ],
    ["restaurants", 50 ],
    ["transport", 12 ],
    ["home", 70 ],
    ["subscriptions", 14 ],
    ["groceries", 28 ],
    ["subscriptions", 12 ]
];

 for(let expense of expenseEntries){
        totalExpensesValue += expense[1];
    }

function calculateAverageExpense(){
    if(expenseEntries.length === 0){
        return 0;
    } else 
         return totalExpensesValue / expenseEntries.length;
}
    
function calculateBalance(){
    let balance = 0;
    balance =  budgetValue - totalExpensesValue;
    return balance;
}


let balanceColor ="green";

function updateBalanceColor(){
    if (calculateBalance() < 0 ){
        balanceColor = "red";
        }   
        else if (calculateBalance() <= (totalExpensesValue * .25)) {
            balanceColor = "orange";
        } else {
            balanceColor ="green";
        }
}


function calculateCategoryExpenses(category){
        let total = 0;

      for(let i = 0; i < expenseEntries.length; i++)
      {
            if(expenseEntries[i][0] === category){
                total += expenseEntries[i][1];
            }
      }
      return  total;
}


function calculateLargestCategory(){

    let categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
    let categoriesData = [];

    for(let category of categories) {
         let total = calculateCategoryExpenses(category);
         categoriesData.push([category, total]);
    }

    let largestCategory = categoriesData[0][0];
    let largestAmount = categoriesData[0][1];

    for(let i = 0; i < categoriesData.length; i++){
        if(categoriesData[i][1] > largestAmount){
            largestAmount = categoriesData[i][1];
            largestCategory = categoriesData[i][0];
        }
        
    }
    return largestCategory;
}

function addExpenseEntry(newEntries){

    expenseEntries.push(newEntries);
    totalExpensesValue += newEntries[1];

}