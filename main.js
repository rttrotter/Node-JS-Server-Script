/********************************
Programmer: Tyler Trotter
Application: server REST endpoint
********************************/

//includes
var https = require('https'); //create https object
//variables
let reverse = ''; // blank variable to hold the reverse of the message 

/*
//setting up server settings
const options = 
{
	hostname: 127.0.0.1,//what the server will be listening for
	port: 9001,//port we're listening on
	path: './testing',//folder for related items?
	method: 'POST',//using post for deciphering requests
	headers: 
	{
		'Content-Type': 'application/json',//using length
		'Content-Length': data.length
	}
}
*/
//create the server
https.createServer(function (inbound, outbound) 
{
	var msgBody = ""; //create a blank message body
	//when recieving data, append it to the msgBody
	//listening to data events 
	inbound.on('data', function()
	{
		
		msgBody += chunk;
		
	});
	//listening for end events
	inbound.on('end', function()
	{
		console.log('POST RAW JSON: '+ msgBody); // testing to print out output
		var jHolder = JSON.stringify(msgBody);
		//create for loop to flip the script
		//set it up for last character, then iterate through the string backwards
		for(var i = jHolder.length-1; i < 0; i--)
		{
			reverse += jHolder.charAt(i);
		}
		//creates a header for the data. sets success code to 200, and styles it for json sending
		var inputHolder = jHolder;
		outbound.writeHead(200, {'Content-Tyle': 'application/json' });
		//sends the information out
		//write the data to the user by making it a json
		outbound.end(JSON.stringify({'data': reverse}));
	});

}).listen(9001); // server will listen on port 9001

console.log('server running on the port 9001');