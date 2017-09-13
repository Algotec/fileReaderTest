
var interval;
var blob;

//  load the image once and create a blob out of it
var xhr = new XMLHttpRequest();
xhr.open("GET", "BMP01.png", true);
xhr.responseType = "arraybuffer";
xhr.onload = function (e) {
	var arrayBufferView = new Uint8Array(e.target.response);
	blob = new Blob([arrayBufferView], {type: "image/png"});
};
xhr.send();

onmessage = function (e) {
	if (e.data === "start")
		start();
	if (e.data === "stop")
		stop();
}

function start() {
	interval = setInterval(function () {

		for (var i = 0; i < 16; i++) {
			var fr = new FileReader();
			fr.onloadend = function (reader) {
				if (!(reader.target.result instanceof ArrayBuffer)) {
					console.log('Failed!');
					console.log(reader.result);
				}
			};
			fr.readAsArrayBuffer(blob);
		}
	}, 50); //  50 fps
}
function stop() {
	clearInterval(interval);
}
