const commands = require("../utility/constants").commands;
/**
 * Receive the data from instrument and display it
 * @param {Socket} socket net.Socket object
 */
function receiveData(socket) {
    //listen on "data" event
    socket.on("data", (data) => {
        data = data.toString(); //buffer received
        data = typeof data === "string" ? JSON.parse(data) : data;
        //print the value received from instrument
        const value = data ? data.value : "";
        const command = data ? data.command : ""; //the value of command will print the valid message for output
        if(command) {
            //print the result
            console.info(`Received ${commands[command]}: ${value.toString()}\n`);
        } else {
            console.warn("Malformed data");
        }
    });
}

module.exports = receiveData;