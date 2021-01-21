/*
Modules:
- A set of functions you want to include in your application (same as JavaScript libraries).
- To include a module, use the require() with the name of the module.
*/


/*
//Example 1:
var http = require('http'); // The require() is used to include a module, here 'http'

// Now your application has access to http module and can create a server that listens to server port and gives a response back to the client.
http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('Hello World!');
}).listen(8080);
*/


/*
Node.js - HTTP Module:
- built-in module which allows Node.js to transfer data over HTTP protocol.
- use the createServer() method to create an HTTP server.
- the first argument of the response.writeHead() method is the status code which is 200 means that all is OK. The second argument is an object containing the response headers.
*/

/*
//Example 2 (Built-In HTTP Module):
var http = require('http');

// Create a server object
http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'}); // This is an HTTP Header. If the response from the server is supposed to be displayed as HTML, you should include an HTTP Header with the correct content type.
    response.write("My name is Javed Siddiqui. I'm a Hybrid Engineer."); // Write a response to the client
    response.end(); // Ends the response
}).listen(8080); // The server object listens on port 8080
*/


/*
//Example 3:
var http = require('http');
var dateTime = require('./myfirstmodule');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('The current date and time is: ' + dateTime.myDateTime());
    response.end();
}).listen(8080);
*/

/*
var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(request.url);
    response.end();
}).listen(8080);
// The request argument represent the request from the client as an Object - (http.IncomingMessage object)
// This object has a property called url which holds the part of the url after the domain name.
*/


/*
Node.js - File System Module:
- the file system module allows you to work with the file system on your computer.
- to include the file system module, use the require() method with the correct module name 'fs'.
- common uses:
    - read files
    - create files
    - update files
    - delete files
    - rename files
*/


//- Read Files: the fs.readFile() is used to read files on your computer.

/*
var http = require('http');
var fileSys = require('fs');

http.createServer(function (request, response){
    fileSys.readFile('demofile1.html', function (err, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        return response.end();
    });
}).listen(8080);
*/



/*
- Create Files: the file system module has several methods for creating files:
    - fs.appendFile()
    - fs.open()
    - fs.writeFile()
*/


//- fs.appendFile() : this method appends specified content to a file. If the file does not exist, it will be created.

/*
var fileSys = require('fs');

fileSys.appendFile('myNewFile1.txt', 'Hello World!', function (err){
    if (err) throw err;
    console.log('Saved!');
});
*/


//- fs.open() : this method takes a flag for the second argument. If 'w' for 'writing', the specified file is opened for writing. If the file does not exists, a new empty file is created.

/*
var fileSys = require('fs');

fileSys.open('myNewFile2.txt', 'w', function (err){
    if (err) throw err;
    console.log('Saved!');
});
*/


//- fs.writeFile() : this method replaces the specified file and its content, if the file exist. If the file does not exists, a new file is created with the specified content.

/*
var fileSys = require('fs');

fileSys.writeFile('myNewFile3.txt', 'Some content!', function (err){
    if (err) throw err;
    console.log('Saved!');
});
*/



/*
- Update Files : following are the methods for updating files:
    - fs.appendFile()
    - fs.writeFile()
*/

// To append the specified content at the end of the file myNewFile1.txt, we are using fs.appendFile() method:
/*
var fileSys = require('fs');

fileSys.appendFile('myNewFile1.txt', ' We are learning Node.js from w3schools.com', function (err){
    if (err) throw err;
    console.log('Updated!');
});
*/

// To replace the content of the specified file myNewFile3.txt, we are using the fs.writeFile() method:
/*
var fileSys = require('fs');

fileSys.writeFile('myNewFile3.txt', 'My name is Javed Siddiqui. I am a Hybrid Engineer!', function (err){
    if (err) throw err;
    console.log('Replaced!');
});
*/



//- Delete Files : the fs.unlink() method is used to delete the specified file.
/*
var fileSys = require('fs');

fileSys.unlink('myNewFile2.txt', function (err){
    if (err) throw err;
    console.log('File deleted successfully!');
});
*/



//- Rename Files : the fs.rename() method is used to rename the specified file name.
/*
var fileSys = require('fs');

fileSys.rename('myNewFile3.txt', 'myNewFile2.txt', function (err){
    if (err) throw err;
    console.log('File name changed successfully!');
});
*/