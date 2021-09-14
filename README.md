# node-socket-sim
Node.js server that establish and communicate with each other through web sockets. This is a simple simulation between to instruments.

## Scope
The project has 2 Node.js applications.
1. instrument: A simulator of ICU monitoring system that returns oxygen saturation and body temperature of the patient. It runs on port 9889
2. driver: Driver communicates with instrument through full duplex socket communication using commands to get data at that particular point in time.
<br/>
An artificaial delay in instrument app is added to demonstrate delay in receiving data from instrument to the driver.
<br/>
No 3rd party libraries used in development, everything done with in built modules.
<br/>
Basic validations and guards added with exception handling.
<br/>
Total of 4-5 hours was spent from start to end.

## Execution
1. Run instrument code with: 
```sh
npm run instrument
```
2. Run driver code with:
```sh
npm run driver
```

## Troubleshooting
1. If port 9889 is already in use, please change the port in the "scripts" section of package.json
2. If driver shows "ECONNREFUSED" error then please check if instrument is running, and then restart driver.

## Driver App Commands
1. To get the oxygen saturation run the following command: 
```sh
get oxygen
```
2. To get the temperature run the following command: 
```sh
get temperature
```
3. To stop the driver app run the following command: 
```sh
exit
```

## Next phase tasks
1. Use winston logger to do more efficient logging.
2. Enable multi driver connections to instrument when needed.
