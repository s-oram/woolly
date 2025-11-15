import { generateStrings, getMaxVector } from "./generateStrings";

describe("generateStrings", () => {
	test("should return all string combinations", async () => {
		const strings = generateStrings(["a", "c", "b"], ".", ["1", "2"]);
		expect(strings).toEqual(["a.1", "a.2", "b.1", "b.2", "c.1", "c.2"]);
	});
});

describe("getMaxVector", () => {
	test("should calculate the max vector", async () => {
		const vector = getMaxVector(["a", "c", "b"], ".", ["1", "2"]);
		expect(vector).toEqual([2, 0, 1]);
	});
});
