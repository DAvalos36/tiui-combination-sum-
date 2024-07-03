/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */
const combinationSumRecursive = (
	candidates,
	remainingSum,
	finalCombinations,
	currentCombination,
	startFrom,
) => {
	if (remainingSum === 0) {
		finalCombinations.push([...currentCombination]);
		return;
	}

	for (let i = startFrom; i < candidates.length; i++) {
		const currentNumber = candidates[i];
		if (currentNumber <= remainingSum) {
			currentCombination.push(currentNumber);
			combinationSumRecursive(
				candidates,
				remainingSum - currentNumber,
				finalCombinations,
				currentCombination,
				i,
			);
			currentCombination.pop();
		}
	}

	return finalCombinations;
};

  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
	const finalCombinations = [];
	const currentCombination = [];
	combinationSumRecursive(
		candidates,
		target,
		finalCombinations,
		currentCombination,
		0,
	);
	return finalCombinations;
};

module.exports = combinationSum;
