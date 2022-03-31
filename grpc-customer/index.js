const Schema = require("./customer_pb");

// using Protocol Buffers generated classes
const max = new Schema.Customer();
max.setId(101);
max.setName("Max Mustermann");
max.setEmail("max.m@example.com");

const sabine = new Schema.Customer();
sabine.setId(102);
sabine.setName("Sabine Mustermann");
sabine.setEmail("sabine.m@example.com");

const customers = new Schema.Customers();
customers.addCustomers(max);
customers.addCustomers(sabine);

console.log("Customers: \r\n" + customers.getCustomersList().join('\r\n'));

const bytes = customers.serializeBinary();
console.log("binary: " + bytes);

const fs = require("fs");
fs.writeFileSync("customersbinary", bytes);


const customers_deserialized =  Schema.Customers.deserializeBinary(bytes);
console.log("customers_deserialized: " + customers_deserialized);
