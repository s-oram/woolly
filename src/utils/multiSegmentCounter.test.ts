import {
	incrementMultiSegmentCounter,
	type MultiSegmentCounter,
} from "./multiSegmentCounter";

describe("incrementMultiSegmentCounter", () => {
	test("should increment value (increment digit)", async () => {
		const counter: MultiSegmentCounter = {
			count: [0, 1, 0, 0],
			max: [2, 2, 2, 3],
		};

		const {
			value: { count: outputCount },
		} = incrementMultiSegmentCounter(counter);

		expect(outputCount).toStrictEqual([0, 1, 0, 1]);
	});

	test("should increment value (single rollover)", async () => {
		const counter: MultiSegmentCounter = {
			count: [0, 0, 0, 2],
			max: [1, 1, 1, 2],
		};

		const {
			value: { count: outputCount },
		} = incrementMultiSegmentCounter(counter);

		expect(outputCount).toStrictEqual([0, 0, 1, 0]);
	});

	test("should increment value (multi rollover)", async () => {
		const counter: MultiSegmentCounter = {
			count: [0, 0, 1, 2],
			max: [1, 1, 1, 2],
		};

		const {
			value: { count: outputCount },
		} = incrementMultiSegmentCounter(counter);

		expect(outputCount).toStrictEqual([0, 1, 0, 0]);
	});

	test("should increment value (overflow and done)", async () => {
		const counter: MultiSegmentCounter = {
			count: [1, 1, 1, 2],
			max: [1, 1, 1, 2],
		};

		const result = incrementMultiSegmentCounter(counter);

		expect(result).toStrictEqual({
			value: { count: [0, 0, 0, 0], max: [1, 1, 1, 2] },
			done: true,
		});
	});

	test("should increment value (rollover for zero max)", async () => {
		const counter: MultiSegmentCounter = {
			count: [0, 0, 0, 0],
			max: [1, 1, 0, 0],
		};

		const result = incrementMultiSegmentCounter(counter);

		expect(result).toStrictEqual({
			value: { count: [0, 1, 0, 0], max: counter.max },
			done: false,
		});
	});

	test("should increment value (overflow for all zeros)", async () => {
		const counter: MultiSegmentCounter = {
			count: [0, 0, 0, 0],
			max: [0, 0, 0, 0],
		};

		const result = incrementMultiSegmentCounter(counter);

		expect(result).toStrictEqual({
			value: { count: [0, 0, 0, 0], max: counter.max },
			done: true,
		});
	});
});
