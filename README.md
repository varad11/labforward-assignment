# labforward-assignment
Engineering JavaScript - Integration Team - Take-Home Challenge

# Scope
The project has 2 Node.js applications.
1). instrument: A simulator of ICU monitoring system that returns oxygen saturation and body temperature of the patient. It runs on port 9889
2). driver: Driver communicates with instrument through full duplex socket communication using commands to get data at that particular point in time.
An artificaial delay in instrument app is added to demonstrate delay in receiving data from instrument to the driver.
No 3rd party libraries used in development, everything done with in built modules.
Basic validations and guards added with exceptional handling.
Total of 4-5 hours was spent from start to end.

# Execution
1). Run instrument code with: npm run instrument
2). Run driver code with: npm run driver

# Troubleshooting
1). If port 9889 is already in use, please change the port in the "scripts" section of package.json
2). If driver shows "ECONNREFUSED" error then please check if instrument is running, and then restart driver.

# Driver Commands
1). To get the oxygen saturation run the following command: get oxygen
2). To get the temperature run the following command: get temperature
3). To stop the driver app run the following command: exit

# Next phase tasks
1). Use winston logger to do more efficient logging.
2). Enable multi driver connections to instrument when needed.
