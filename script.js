"use strict";

function getMaxSubSum(arr) {
	let sum = 0;
	let maxSum = 0;

	for (let val of arr) {
		sum += val;

		if (sum < 0) sum = 0;
		if (sum > maxSum) maxSum = sum;
	}

	return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );// 5 (сумма выделенных)
alert( getMaxSubSum([2, -1, 2, 3, -9]) );// 6
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );// 11
alert( getMaxSubSum([-2, -1, 1, 2]) );// 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) );// 100
alert( getMaxSubSum([1, 2, 3]) );// 6 (берём все)
alert( getMaxSubSum([-1, -2, -3]) );// 0