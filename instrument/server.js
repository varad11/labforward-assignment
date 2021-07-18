const net = require("net");

//port from terminal args
//check package.json for command details
const port = process.argv.slice(2)[0];

try {
    //create TCP server
    const server = net.createServer((client) => {
        //here client events received
        console.log("event requested", client);

        const interval = setInterval(() => {
            client.write("hello");
        }, 3000);

        client.on("end", () => {
            clearInterval(interval);
            console.log("client disconnected:", client);
        });
    });

    //set max drivers that are allowed to connect
    server.maxConnections = 1;

    //start listening for events on given port
    server.listen(port, () => {
        console.log("instrument is available on address:", server.address());
    });

} catch (error) {
    console.error(error);
}
