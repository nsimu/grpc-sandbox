const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("customer.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const customerPackage = grpcObject.customerPackage;

const server = new grpc.Server();
server.bind("0.0.0.0:40000", grpc.ServerCredentials.createInsecure());
server.addService(customerPackage.CustomerService.service,
    {
        "createCustomer": createCustomer,
        "readCustomers": readCustomers
    });
server.start();

const customers = [];
function createCustomer(call, callback) {
    console.log(call);
    const newCustomer = {
        "id": customers.length + 1,
        "name": call.request.name,
        "email": call.request.email
    };
    customers.push(newCustomer);
    callback(null, newCustomer);
}

function readCustomers(call, callback) {

}