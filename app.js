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
  let error = "$ " + command + " " + commands.error.text;
  let getCV = $(inp).value.toLowerCase();
  $(inp).value = "";
  getCV === 'cv'
    ? print('<p><a href="cv.pdf">Download</a> PDF resume version</p>')
    : commands[command]
        ? print(JSON.stringify(commands[command].text, null, "\t"))
        : print(error);
    getCV = "";
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
