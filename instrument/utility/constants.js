//Here provide the simulation data for the command received on the instrument
//data object can be extended to include more commands as needed.
module.exports = {
    ranges: {
        "o": { max: 99, min: 91 }, //command "o", oxygen saturation between range 91 to 99
        "t": { max: 37.5, min: 36.7 } //command "t", temperature between range 36.7 to 37.5
    },
    units: {
        "o": "",
        "t": "ºC"
    },
    delay: 500
}