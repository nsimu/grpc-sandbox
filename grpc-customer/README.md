[Protocol buffers](https://developers.google.com/protocol-buffers/) example with javascript

# Install the protocol compiler `protoc`
This translates .proto files into .js files. 

https://github.com/protocolbuffers/protobuf/releases

Check if `protoc` is installed

    protoc --version

# Run the compiler with the import_style=commonjs option

    protoc --js_out=import_style=commonjs,binary:. customer.proto

# Install google-protobuf package - the protobuf runtime library

    npm install google-protobuf

# run the code
/usr/bin/node ./index.js
My name is Max Mustermann

# generate java class

    protoc --proto_path=./ --java_out=./ customer.proto

If we define a package in the proto file `package customerPackage;`
then the compiler will generate a new file  `customerPackage/CustomerOuterClass.java`


# GRPC server.js

    npm install grpc @grpc/proto-loader

Start the server

    /usr/bin/node ./server.js




# Links

https://developers.google.com/protocol-buffers/docs/reference/javascript-generated
https://developers.google.com/protocol-buffers/docs/reference/java-generated#invocation
https://github.com/hnasr/javascript_playground/tree/master/protobuff
