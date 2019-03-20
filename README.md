#Bamazon

This Node.js app will work with a SQL database to process orders from customer while alerting customers to items that are in stock. 

Prior to accessing the store, the client should run "npm install" to access all of the needed packages.

The client will access the store through the following command:
![picture](/bamazon.png)

Once running, the inquirer package will ask the client what they would like to purchase using the id number of the product (corresponding to the id number in the SQL database) and how many of the product they would like to purchase. 

If there is not enough of the product to satisfy the order, the client will receive an alert and will be notified of how many are in stock. 

If there is enough of the product to satify the order, the order will go through and the client will be alerted. At that point, they will also be prompted to make another purchase if they chose to do so. 