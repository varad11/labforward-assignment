const net = require("net");

//port from terminal args
//check package.json for command details
const port = process.argv.slice(2)[0];

try {
    const client = net.createConnection({ port }, () => {
        console.log("connected to instrument");
    });

    client.on("data", (data) => {
        console.log(data.toString());
    });
} catch (error) {
    console.error(error);
}
