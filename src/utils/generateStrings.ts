import {
	incrementMultiSegmentCounter,
	type MultiSegmentCounter,
} from "./multiSegmentCounter";

type Segments = Array<string | string[]>;

export const generateStrings = (...segments: Segments): string[] => {
	const result: string[] = [];
	let counter = createMultiSegmentCounter(...segments);
	while (true) {
		result.push(readString(segments, counter));
		const next = incrementMultiSegmentCounter(counter);
		if (next.done) {
			break;
		}
		counter = next.value;
	}
	return result.sort((a, b) => a.localeCompare(b));
};

export const getMaxVector = (...segments: Segments): number[] => {
	return segments.map((segment) =>
		Array.isArray(segment) ? segment.length - 1 : 0,
	);
};

const createMultiSegmentCounter = (
	...source: Array<string | string[]>
): MultiSegmentCounter => {
	const max = getMaxVector(...source);
	return {
		count: max.map(() => 0),
		max,
	};
};

const readString = (
	segments: Segments,
	counter: MultiSegmentCounter,
): string => {
	return counter.count.reduce<string>((prev, next, index) => {
		const segmentValue = Array.isArray(segments[index])
			? segments[index][next]
			: segments[index];
		return prev + segmentValue;
	}, "");
};
