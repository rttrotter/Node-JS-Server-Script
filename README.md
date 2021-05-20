#JSON Reverser server script

##Description

This script is designed to run in Node.js to create an HTTP server  localhosted on port 9001.
This server will accept PUT requests containing single lined JSON objects with 
the keyword 'Data', (Case sensitive), and a string containing data that the user
wishes to be reversed. The output is returned as a Json with 'Data' as the keyword
and it's value the reversed string of the user value.

### Requirements
This script requires Node.js to be installed locally, which can be downloaded at 
https://nodejs.org/en/download/

### Installation and running the script

Once downloaded, extract the contents to the desired location. Once extracted, 
open a command prompt or terminal, navigate to the folder and enter the command
'node .\main.js' 

To exit the script, simply send a stop command by 'ctrl+c'

a testing script has been provided along with the server. To run it, navigate to
where the file was extracted via the command prompt or termainal, and enter the 
command 'node .\tester.js' while the server is running in a seperate command prompt
or terminal.

#### Expected output 
The server will return to the console the raw data it recieved, the contents of the string
before the reversal, and the contents of the string after the reversal. Should the user
send a request that is not a PUT, or not a json with the 'Data' key. The server will return
a 400 error with a Json holding the description of the error. 

