#!/usr/bin/env python3

# you will have to delete the last comma of the output :(

import re

inputFile = open("flights.csv","r");
inContent = inputFile.read();
inputFile.close();

airportFile = open("airports.dat", "r");
airports = airportFile.read();
#print(airports);
airportFile.close();

#m = re.search('"IND","KIND",([\.\-0-9]+),([\.\-0-9]+)', airports);
#print(m);
#print(m.group(1));
#print(m.group(2));
#print('IND' in airports);

matches = re.findall(',([A-Z]{3}),([A-Z]{3})', inContent);
for match in matches:
	#print("[" + match[0] + "], [" + match[1] + "]");
	coordinates1 = re.search('"' + match[0] +'",".+",([\.\-0-9]+),([\.\-0-9]+)', airports);
	coordinates2 = re.search('"' + match[1] +'",".+",([\.\-0-9]+),([\.\-0-9]+)', airports);
	print('      { "type": "Feature",\n        "geometry": {\n          "type": "LineString",\n          "coordinates": [[' + coordinates1.group(2) + ',' + coordinates1.group(1) + '], [' + coordinates2.group(2) + ', ' + coordinates2.group(1) + ']]\n         },\n          "properties": {\n            "prop0": "value0"\n          }\n      },');
