function call(num) {
	debugger;
	console.log("call called" + num);
}

function callback() {
	debugger;
	console.log("timeout 1000");
}

function run() {
	call(1);

	setTimeout(function() {
		callback();
	}, 1000);
	call(2);
}

run();
