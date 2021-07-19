const constants = require("../utility/constants");
const ranges = constants.ranges //for now mock data.
const units = constants.units;

/**
 * This function returns the readings from connected sensors
 * @param {string} command in ASCII HEX
 */
function getReadings(command) {
    command = String.fromCharCode(parseInt(command, 16)); //Convert from ASCII hex to decimal and then to valid alphabet
    const range = ranges[command];
    if(range) {
        console.log("Command Recognized");
        const reading = (Math.random() * (range.max - range.min) + range.min).toFixed(2); //upto to 2 decimal points
        const unit = units[command]; //fetch the unit for input command
        return new Promise((resolve) => {
            //adding artificial delay to return results
            setTimeout(() => {
                resolve({value: `${reading}${unit}`, command}); //send back the value and command that was executed back to the driver
            }, constants.delay);
        });
    } else {
        console.log("Unrecognized Command");
    }
}

module.exports = getReadings;