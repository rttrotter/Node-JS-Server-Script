/*********************************************
programmer: Tyler Trotter
Script: JSON client tester

*********************************************/

//includes
const http = require('http');

//variables
let recieved = "";
//create a JSON object and turn it into a string to send to our server
let msg = JSON.stringify(
{
	"Data": "hello world"
});

//connection information, who we're trying to contact
const options = 
{
	hostname: 'localhost',//server address
	port: 9001,//port we're listening on
	path: '/post',//folder for related items?
	method: 'PUT',//using post for deciphering requests
	headers: 
	{
		'Content-Type': 'application/json', //Let the server know we're sending a json
		'Content-Length': Buffer.byteLength(msg, 'utf8')//lets the server know to expect a message the length of our data
	}
}

let requestPost = http.request(options, function(result)
{
	console.log("status code: ", result.statusCode);
	
	result.on('data', function(chunk)
	{
		recieved += chunk;//send the result to the console
	});
	result.on('end', function()
	{
		var jholder = JSON.parse(recieved);
		console.log(JSON.stringify(jholder));
	});
	
});

requestPost.write(msg);//send the message to the server
requestPost.end();//send the end of writing the message

//error handling
requestPost.on('error', function (error)
{
	console.error(error);
});
