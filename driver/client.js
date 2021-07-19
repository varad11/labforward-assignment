const socketConnect = require("./utility/connection");
const sendCommand = require("./service/send");
const receiveData = require("./service/receive");

(async function startDriver() {
    //port from terminal args
    //check package.json for command details
    const port = process.argv.slice(2)[0];
    const host = process.argv.slice(2)[1];
    console.log("*********DRIVER APP*********");
    
    console.info("The driver helps you to fetch Oxygen Saturation value and Body Temperature of patient from ICU monitor system.")
    //1). Create socket connection to the instrument
    const socket = await socketConnect(port, host);
    if(socket) {
        console.log("\nCommands to use: \n1). get oxygen \n2). get temperature \n3). exit\n");

        //2). Send the command to instrument
        sendCommand(socket);
        //3). Listen and process the data from instrument
        receiveData(socket);
    } else {
        console.log("Exiting..");
        process.exit(0);
    }
})();