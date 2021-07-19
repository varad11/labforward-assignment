const readline = require("readline").createInterface({ input: process.stdin });
const codes = require("../utility/constants").codes;

/**
 * Send the command to instrument
 * @param {Socket} socket 
 */
function sendCommand(socket) {
    //using readline, on event "line" get the input from terminal
    readline.on("line", (input) => {
        input = input.toLowerCase();
        //Based on the input value take appropriate action
        switch (input) {
            case 'get oxygen': //terminal command to get the oxygen saturation
                var instrumentCode = codes.oxygen;
                socket.write(instrumentCode.charCodeAt(0).toString(16)); //send in ASCII HEX
                break;
            case 'get temperature': //terminal command to get the body temperature
                var instrumentCode = codes.temperature;
                socket.write(instrumentCode.charCodeAt(0).toString(16)); //send in ASCII HEX
                break;
            case 'exit': //command to stop driver
                console.info("Stopping the driver");
                if(socket) {
                    socket.destroy(); //close the socket
                }
                readline.close();
                console.log("stopped");
                process.exit(0); //exit the process
            default:
                console.log("Command not recognized ", input);
                break;
        }
    });
}

module.exports = sendCommand;