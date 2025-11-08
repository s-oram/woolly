import invariant from "tiny-invariant";

export type MultiSegmentCounter = {
	count: number[];
	max: number[];
};

export const incrementMultiSegmentCounter = (
	counter: MultiSegmentCounter,
): { value: MultiSegmentCounter; done: boolean } => {
	invariant(counter.count.length > 0, "ID:1109092019");
	invariant(counter.count.length === counter.max.length, "ID:1209092032");

	const { count: inputCount, max } = counter;

	const outputCount = [...inputCount]; // <- value is mutated

	for (let index = counter.count.length - 1; index >= 0; index--) {
		if (inputCount[index] < max[index]) {
			outputCount[index]++;
			return {
				value: {
					count: outputCount,
					max,
				},
				done: false,
			};
		}

		if (inputCount[index] === max[index]) {
			outputCount[index] = 0;
		}
	}

	return {
		value: {
			count: outputCount,
			max,
		},
		done: true,
	};
};
