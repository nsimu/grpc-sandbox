const fs = require("fs");
const customers = [];

// with JSON

customers.push({
    "id": 101,
    "name": "Max Mustermann",
    "email": "max.m@example.com"
},
{
    "id": 102,
    "name": "Sabine Mustermann",
    "address": "sabine.m@example.com"
});

fs.writeFileSync("customers.json", JSON.stringify(customers));
