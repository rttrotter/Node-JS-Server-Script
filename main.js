/********************************
Programmer: Tyler Trotter
Application: server REST endpoint
********************************/

//includes
var https = require('http'); //create https object
//variables
let reverse = ""; // blank string variable to hold the reverse of the message 

//create the server
https.createServer(function (inbound, outbound) 
{
	if(https.method == 'POST')
	{
		console.log("POST");// testing statement
	}
	if(https.method == 'GET')
	{
		console.log("GET");// testing statement
	}
	var msgBody = ""; //create a blank message body
	//when recieving data, append it to the msgBody
	//listening to data events 
	inbound.on('data', function(chunk)
	{
		console.log("in inbound.on data");
		msgBody += chunk;
		
	});
	//listening for end events
	inbound.on('end', function()
	{
		try// error catching
		{
			console.log("in inbound.on data");
			console.log('POST RAW JSON: '+ msgBody); // testing to print out output
			var jHolder = JSON.parse(msgBody);
			var message = jHolder.Data;
			console.log(message);
			//create for loop to flip the script
			//set it up for last character, then iterate through the string backwards
			for(var i = message.length-1; i > -1; i--) // make sure to include postion 0, hence stoping greater than -1
			{
				reverse += message.charAt(i);//put the backwareds string together
			}
			console.log(reverse);//testing statement to make sure we have the string
			outbound.writeHead(200, {'Content-Tyle': 'application/json' });
			//sends the information out
			//write the data to the user by making it a json
			outbound.end(JSON.stringify({'Data': reverse}));
		}
		catch(error)
		{
			console.error(error.message);//print to console what the error was
		};
	});

}).listen(9001); // server will listen on port 9001

console.log('server running on the port 9001');