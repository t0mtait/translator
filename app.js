const server = require('./server.js');

showMenu();

async function showMenu()
{
    


    console.log("input text to be translated:\t")
    // get user input
    var stdin = process.openStdin();
    stdin.addListener("data", function(d) {
        var input = d.toString().trim();

        // translate input
        server.translate(input);
    });
}