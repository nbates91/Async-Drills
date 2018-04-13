// async practice

// function someFunc(a, b) {
// 	console.log('hey');
// 	return a + b;
// }
// let funcVal = someFunc(5, 3);

// function someFunc2(num) {
// 	setTimeout(() => {
// 		console.log(num * 4);
// 	}, 2000);
// }

// someFunc2(funcVal);

//callback practice

// function getWords() {
// 	console.log('word 1');
// 	setTimeout(() => {
// 		console.log('word 2');
// 	}, 2000);
// 	console.log('word 3');
// 	console.log('word 4');
// }
// getWords();

// counts down from 10 and logs done!

// function countdown(num, callback) {
// 	for (var i = num; i >= 1; i--) {
// 		console.log(i);
// 	}
// 	return callback();
// }

// function done() {
// 	console.log('Done!');
// }
// countdown(10, done);

let isBoo;

function orderingChickenSandwich() {
	return new Promise((resolve, reject) => {
		let num = Math.floor(Math.random() * 10);
		if (num % 2 === 0) {
			isBoo = true;
		} else {
			isBoo = false;
		}
		if (isBoo == true) {
			let chickenSandwich = {
				sandwich: 'chicken',
				veggies: 'lettuce',
			};
			resolve(chickenSandwich);
		} else {
			let err = new Error('No sandwich for you');
			reject(err);
		}
	});
}

orderingChickenSandwich()
	.then(value => {
		console.log(value);
	})
	.catch(err => {
		console.log(err);
	});

function chain() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(1);
		}, 2000);
	});
}

chain()
	.then(value => {
		console.log(value);
		return value * 2;
	})
	.then(value => {
		console.log(value);
		return value * 4;
	})
	.then(value => {
		console.log(value);
		return value * 6;
	})
	.then(value => {
		console.log(value, ' Finished');
	});
