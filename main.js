/********************************
Programmer: Tyler Trotter
Application: server REST endpoint
********************************/

//includes
var https = require('https'); //create https object
var JSON = require('JSON');
var reverse = "";


//setting up server settings
const options = 
{
	hostename: 127.0.0.1,//what the server will be listening for
	port: 9001,//port we're listening on
	path: './testing',//folder for related items?
	method: 'POST',//using post for deciphering requests
	headers: 
	{
		'Content-Type': 'application/json',//using length
		'Content-Length': data.length
	}
}

//create the server
http.createServer(function (inbound, outbound) 
{
	var msgBody = ""; //create a blank message body
	//when recieving data, append it to the msgBody
	//listening to data events 
	inbound.on('data', function (chunk)
	{
		msgBody += chunk;
	});
	//listening for end events
	inbound.on('end', function()
	(
		console.log('POST RAW JSON: '+ body); // testing to print out output
	}
//creates a header for the data. sets success code to 200, and styles it for json sending
outbound.writeHead(200, {'Content-Tyle': 'application/json' }); 
//sends the information out
//write the data to the user by making it a json
outbound.end(JSON.stringify({
	data: 'hello world!'
}));



}).listen(9001); // server will listen on port 9001