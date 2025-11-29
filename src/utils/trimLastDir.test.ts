import { trimLastDir, trimLastDirIfMatch } from "./trimLastDir";

describe("trimLastDirIfMatch", () => {
	// Tests with absolute file paths
	test("should trim last segment of absolute path if match", async () => {
		const value = trimLastDirIfMatch("/foo/bar/baz", ["apple", "task", "baz"]);
		expect(value).toEqual("/foo/bar");
	});

	test("should return the original absolute path if the final segment does not match", async () => {
		const value = trimLastDirIfMatch("/foo/bar/baz", ["apple", "task"]);
		expect(value).toEqual("/foo/bar/baz");
	});

	test("should return the original absolute path if the to trim array is empty", async () => {
		const value = trimLastDirIfMatch("/foo/bar/baz", []);
		expect(value).toEqual("/foo/bar/baz");
	});

	test("should return the original absolute path if there is only one segment", async () => {
		const value = trimLastDirIfMatch("/baz", ["baz"]);
		expect(value).toEqual("/baz");
	});

	// Tests with relative file paths

	test("should trim last segment of relative path if match", async () => {
		const value = trimLastDirIfMatch("foo/bar/baz", ["apple", "task", "baz"]);
		expect(value).toEqual("foo/bar");
	});

	test("should return the original relative path if the final segment does not match", async () => {
		const value = trimLastDirIfMatch("foo/bar/baz", ["apple", "task"]);
		expect(value).toEqual("foo/bar/baz");
	});

	test("should return the original relative path if the to trim array is empty", async () => {
		const value = trimLastDirIfMatch("foo/bar/baz", []);
		expect(value).toEqual("foo/bar/baz");
	});

	test("should return the original relative path if there is only one segment", async () => {
		const value = trimLastDirIfMatch("baz", ["baz"]);
		expect(value).toEqual("baz");
	});
});

describe("trimLastDir", () => {
	test("should trim last segment of absolute path with multiple segments", async () => {
		const value = trimLastDir("/foo/bar/baz");
		expect(value).toEqual("/foo/bar");
	});

	xtest("should trim last segment of absolute path with one segment", async () => {
		const value = trimLastDir("/foo");
		expect(value).toEqual("/");
	});
});
