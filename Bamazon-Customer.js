//require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');
//database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mack1908",
  database: "Bamazon"
})

function intro(){
//shows the inventory
connection.query('SELECT * FROM products', function(err, response){
  if(err) throw err;

  console.log('Welcome to Bamazon')
  console.log('----------------------------------------------------------------------------------------------------')

  for(var i = 0; i<response.length;i++){
    console.log("ID: " + response[i].itemID + " | " + "Product: " + response[i].productName + " | " + "Department: " + response[i].deptName + " | " + "Price: " + response[i].price + " | " + "QTY: " + response[i].stockQuan);
    console.log('--------------------------------------------------------------------------------------------------')
  }

  console.log(' ');
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What would you like to purchase? Please provide a valid ID number.",
      validate: function(value){
        if(isNaN(value) === false && parseInt(value) <= response.length && parseInt(value) > 0){
          return true;
        } else{
          return false;
        }
      }
    },
    {
      type: "input",
      name: "quantity",
      message: "How many would you like to purchase? Please provide a valid number",
      validate: function(value){
        if(isNaN(value)){
          return false;
        } else{
          return true;
        }
      }
    }
    ]).then(function(ans){
      var itemPurchased = (ans.id)-1;
      var howMany = parseInt(ans.qty);
      var total = parseFloat(((response[itemPurchased].Price)*howMany).toFixed(2));

      //is there enough in stock
      if(res[itemPurchased].stockQuan >= howMany){
        connection.query("UPDATE Products SET ? WHERE ?", [
        {stockQuan: (res[itemPurchased].stockQuan - howMany)},
        {itemID: ans.id}
        ], function(err, result){
            if(err) throw err;
            console.log("Order total is $" + total.toFixed(2) + ". Please check your confirmation email.");
        });

        connection.query("SELECT * FROM Departments", function(err, deptRes){
          if(err) throw err;
          var index;
          for(var i = 0; i < deptRes.length; i++){
            if(deptRes[i].deptName === res[itemPurchased].deptName){
              index = i;
            }
          }
          
          //updates totalSales in departments table
          connection.query("UPDATE Departments SET ? WHERE ?", [
          {TotalSales: deptRes[index].TotalSales + total},
          {deptName: res[itemPurchased].deptName}
          ], function(err, deptRes){
              if(err) throw err;
          });
        });

      } else{
        console.log("There is not enough in stock, please select another amount.");
      }

      askAgain();
    })
})
}

//asks if they would like to purchase another item
function askAgain(){
  inquirer.prompt([{
    type: "confirm",
    name: "reply",
    message: "Would you like to purchase another item?"
  }]).then(function(ans){
    if(ans.reply){
      start();
    } else{
      console.log("Come back soon!");
    }
  });
}

start();
