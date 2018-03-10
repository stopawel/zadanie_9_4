var heightTree = 10;


function drawTree() {
	for (i = 0; i < heightTree; i++) {
		var star = '';
		var star2 = '';
		var space = '';

		for (j = 0; j <= i; j++) {
			star += '*';
		}
		for (j = 1; j <= i; j++) {
			star2 += '*';
		}

		for (k = heightTree -1; k >= i; k--){
			space += ' ';
		}

		console.log(space, star + star2);
		}
	}
console.log(drawTree());