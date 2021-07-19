const net = require("net");
const getReadings = require("./service/readings");

//port from terminal args
//check package.json for command details
const port = process.argv.slice(2)[0];
console.log("*********INSTRUMENT APP*********");
try {
    //create TCP server
    const server = net.createServer((driver) => {
        console.log("driver connected");
        driver.on("data", async (data) => {
            //this event invoked when "data" received on socket.
            console.log("\nReceived", `0x${data}`);

            //fetch the dummy readings for input command
            const reading = await getReadings(data);

            //send the reading back to driver
            console.log("Sending: ", reading && reading.value || null);
            driver.write(JSON.stringify(reading));
        })

        driver.on("end", () => {            
            console.log("driver disconnected");
        });

        driver.on("error", (err) => {            
            console.error(err.message);
        })
    });

    //set max drivers that are allowed to connect
    server.maxConnections = 1;

    //start listening for events on given port
    server.listen(port, () => {
        console.log("Instrument online");
        console.log(`Listening on port: ${port}`);
    });

} catch (error) {
    console.error(error);
}
