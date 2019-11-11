let commands = readTextFile("https://bogomazov.me/data.json", function(text) {
  commands = JSON.parse(text);
  console.log(commands);
});
const $ = cn => {
  return document.getElementById(cn);
};

const handle = e => {
  e.keyCode.toString() === "13" ? consInput("inp") : "";
};

const consInput = inp => {
  let command = $(inp).value.toLowerCase();
  let error = "$ " + command + commands.error.text;
  $(inp).value = "";
  commands[command]
    ? print(JSON.stringify(commands[command].text, null, "\t"))
    : print(error);
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

function print(text) {
  $("text").innerHTML += "<pre>" + text + "</pre>";
  $("text").scrollTop = $("text").scrollHeight;
}

document.addEventListener("keypress", handle);
