const net = require("net");

/**
 * Create a socket connection to the input host & port.
 * @param {number} port
 * @param {string} host
 * @returns promise
 */
async function socketConnect(port, host) {    
    return new Promise((resolve) => {
        try {
            if(port && host) {
                //here connect the "driver" aka "client" to the instrument i.e. the TCP server
                //creates a socket connection
                const client = net.createConnection({ port, host }, () => {
                    console.log("Driver online");
                });
                client.on("error", (err) => {
                    console.error(err.message);
                    process.exit(0); //exit driver if error connecting
                })            
                resolve(client); //return the client object
            } else {
                console.error("Failed to connect to instrument");
            }
            
            resolve(null);
        } catch (error) {
            console.error(error.message);
            resolve(null); //return null in case of error.
        }
    });
}

module.exports = socketConnect;