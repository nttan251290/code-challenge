
// 1/ First Duplicate in Array

// Input :   a: [2, 1, 3, 5, 3, 2]
// Output:  3
function firstDuplicate(a) {
	const memory = {};
	for (let i = 0; i < a.length; i++) {
		if (memory[a[i]] !== undefined) {
			return a[i];
		} else {
			memory[a[i]] = a[i];
		}
	}
	return -1;
}

// 2/ firstNotRepeatingCharacter
// Input : s = "abacabad"
// Output: 3
function firstNotRepeatingCharacter(s) {
	for (var i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
			return c;
		}
	}
	return '_';
}

// 3/  Rotate the image by 90 degrees (clockwise).
// Input : a = [[1, 2, 3],
//              [4, 5, 6],
//              [7, 8, 9]]
// Output: rotateImage(a) =
//              [ [7, 4, 1],
//                [8, 5, 2],
//                [9, 6, 3] ]
function rotateImage(matrix) {
	let result = [];
	for (let i = 0; i < matrix[0].length; i++) {
		let row = matrix.map(row => row[i]).reverse();
		result.push(row);
	}
	return result;
}

// 4/ Check Sodoku2
function sudoku2(grid) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			var c = grid[i][j];
			if (c !== '.') {
				// check row
				for (var z = 0; z < 9; z++) {
					if (j !== z && grid[i][z] === c)
						return false;
				}
				// check column
				for (var z = 0; z < 9; z++) {
					if (i !== z && grid[z][j] === c)
						return false;
				}
				// check square
				var a = i - i % 3,
					b = j - j % 3;
				for (var x = a; x < a + 3; x++) {
					for (var y = b; y < b + 3; y++) {
						if (x !== i && y !== j && grid[x][y] === c)
							return false;
					}
				}
			}
		}
	}
	return true;
}

// 5/ Is Crypt Solution
// Input  : crypt = ["SEND", "MORE", "MONEY"] and
// Output : solution = [['O', '0'],
//             ['M', '1'],
//             ['Y', '2'],
//             ['E', '5'],
//             ['N', '6'],
//             ['D', '7'],
//             ['R', '8'],
//             ['S', '9']]
function isCryptSolution(crypt, solution) {
	const [a, b, c] = crypt;
	const map = {};
	solution.forEach((item) => map[item[0]] = +item[1])

	const convert = (n) => {
		if (!map[n[0]] && n.length > 1) return NaN;
		return +n.split('').map(l => map[l]).join('')
	}

	return convert(a) + convert(b) === convert(c);
}

// 6/ Remove K From List
// For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
// removeKFromList(l, k) = [1, 2, 4, 5];

function ListNode(x) {
	this.value = x;
	this.next = null;
}

function removeKFromList(l, k) {
	let dummy = new ListNode();
	dummy.next = l;
	let current = dummy;

	while (current.next) {
		if (current.next.value === k) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}

	return dummy.next;
}

// Solution 2 
function removeKFromList(l, k) {
	console.log('l is : ', l);
	console.log('k is : ', k)
	var curr;

	// remove leading k values with changing l
	while (l && l.value == k) {
		l = l.next;
	}

	// loop to the end.
	// skip nodes with k values.
	curr = l;
	while (curr && curr.next) {
		if (curr.next.value == k) {
			curr.next = curr.next.next;
		} else {
			curr = curr.next;
		}
	}
	return l;
}

// 7/ isListPalindrome
// For l = [0, 1, 0], the output should be
// isListPalindrome(l) = true;

// For l = [1, 2, 2, 3], the output should be
// isListPalindrome(l) = false.
function isListPalindrome(l) {
	if (!l) {
		return true
	}
	var arr = []
	while (l) {
		arr.push(l.value)
		l = l.next
	}
	console.log('array is : ', arr)
	return (arr.toString() === arr.reverse().toString())
}