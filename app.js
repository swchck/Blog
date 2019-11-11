let commands = readTextFile("data.json", function(text){
    commands = JSON.parse(text);
    console.log(commands);
});
const $ = (cn) => {
    return document.getElementById(cn);
};

const handle = (e) => {
    e.keyCode.toString() === "13" ? consInput('inp') : console.log('not ent');
};

const consInput = (inp) => {
    let command = $(inp).value;
    console.log(command);
    if (command === 'ls') {
        console.log("LS")
    }
    let error = '$ ' + command + commands.error.text;
    $(inp).value = '';
    console.log(JSON.stringify(commands[command].text, null, '\t'));
    $('text').innerHTML += '<pre>' + (commands[command] ?  JSON.stringify(commands[command].text, null, '\t') : error) + '</pre>';
};

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status.toString() === "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

document.addEventListener('keypress', handle);
