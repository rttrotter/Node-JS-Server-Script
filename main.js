/********************************
Programmer: Tyler Trotter
Application: server REST endpoint
********************************/

//includes
var http = require('http'); //create http object


//create the server
http.createServer(function (inbound, outbound) 
{
	let reverse = ''; // blank string variable to hold the reverse of the message 
	var msgBody = ''; //create a blank message body
	//when recieving data, append it to the msgBody
	//listening to data events 
	inbound.on('data', function(chunk)
	{
		msgBody += chunk;
		
	});
	//listening for end events
	inbound.on('end', function()
	{
		try// error catching
		{
			if(inbound.method == 'PUT')
			{
				console.log('PUT request');
			}
			else
			{
				throw new Error('not a PUT request');//send a 400 error code, this server is intended only to accept PUT
			}

			console.log('POST RAW JSON: '+ msgBody); // print out the raw incoming json
			var jHolder = JSON.parse(msgBody);
			var message = jHolder.Data;
			console.log("recieved: ", message);// nicer version of what we recieved
			//create for loop to flip the script
			//set it up for last character, then iterate through the string backwards
			for(var i = message.length-1; i > -1; i--) // make sure to include postion 0, hence stoping greater than -1
			{
				reverse += message.charAt(i);//put the backwareds string together
			}
			
			//sends the information out
			//normally this would be a 201, but because we're not storing any information with a put request, it's a 200
			outbound.writeHead(200, {'Content-Tyle': 'application/json' }); 
			//write the data to the user by making it a json
			outbound.end(JSON.stringify({'Data': reverse}));
			console.log("Sending: ", reverse);//report of what we sent to the client
		}
		catch(error)
		{
			console.error(error.message);//print to console what the error was
			outbound.writeHead(400, {'Content-Tyle': 'application/json' });//places our header into the output, error 400 for userside
			outbound.end(JSON.stringify({'Error': error.message})); //returns a json stating the error
			
		};
	});

}).listen(9001); // server will listen on port 9001

console.log('server running on the port 9001');