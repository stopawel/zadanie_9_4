function drawTree(height) {
	for (var i = 0; i < height; i++) {
		var star = '';
		var space = '';

		for (var j = 0; j <= i * 2; j++) {
			star += '*';
		}
		for (j = height -1; j >= i; j--){
			space += ' ';
		}
		console.log(space, star);
	}
}

console.log(drawTree(4));
console.log(drawTree(10));
console.log(drawTree(5));