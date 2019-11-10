#!/usr/bin/env python3

# you will have to delete the last comma of the output :(

import re

inputFile = open("flights.csv","r");
inContent = inputFile.read();
inputFile.close();

airportFile = open("airports.dat", "r");
airports = airportFile.read();
airportFile.close();

print('time,latitude,longitude');

matches = re.findall(',([A-Z]{3}),([A-Z]{3})', inContent);
for match in matches:
	#print("[" + match[0] + "], [" + match[1] + "]");
	coordinates1 = re.search('"' + match[0] +'",".+",([\.\-0-9]+),([\.\-0-9]+)', airports);
	coordinates2 = re.search('"' + match[1] +'",".+",([\.\-0-9]+),([\.\-0-9]+)', airports);
	print('2019-11-07T07:09:27.003Z,' + coordinates2.group(1) + ',' + coordinates2.group(2));
