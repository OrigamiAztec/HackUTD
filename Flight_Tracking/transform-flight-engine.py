#!/usr/bin/env python3

# you will have to delete the last comma of the output :(

import re

inputFile = open("flights-formatted.json","r");
inContent = inputFile.read();
inputFile.close();

#matches = re.findall('"origin": {\n.*\n.*\n      "location": {\n        "latitude": ([\.\-0-9]+),        "longitude": ([\.\-0-9]+)\n      }\n    },\n    "destination": {\n.*\n.*\n      "location": {\n        "latitude": ([\.\-0-9]+),\n        "longitude": ([\.\-0-9]+)', inContent);
matches = re.findall('"origin": {\n.*\n.*\n      "location": {\n        "latitude": ([\.\-0-9]+),\n        "longitude": ([\.\-0-9]+)\n      }\n    },\n    "destination": {\n.*\n.*\n      "location": {\n        "latitude": ([\.\-0-9]+),\n        "longitude": ([\.\-0-9]+)', inContent);
#print(matches);

for match in matches:
	#print("[[" + match[0] + ", " + match[1] + "], [" + match[2] + ", " + match[3] + "]]");
	print('      { "type": "Feature",\n        "geometry": {\n          "type": "LineString",\n          "coordinates": [[-' + match[1] + ', ' + match[0] + '], [-' + match[3] + ', ' + match[2] + ']]\n         },\n          "properties": {\n            "prop0": "value0"\n          }\n      },');
