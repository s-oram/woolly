import { inferFileProperties } from "./inferFileProperties";

describe("inferFileProperties", () => {
	test("should detect storybook TSX files", async () => {
		const path = "path/to/Layout.stories.tsx";
		const value = inferFileProperties(path);
		expect(value).toEqual({
			basename: "Layout",
			type: "storybook",
			ext: ".tsx",
		});
	});

	test("should detect test TSX files", async () => {
		const path = "path/to/Layout.test.tsx";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "test", ext: ".tsx" });
	});

	test("should detect test TS files", async () => {
		const path = "path/to/Layout.test.ts";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "test", ext: ".ts" });
	});

	test("should detect test JSX files", async () => {
		const path = "path/to/Layout.test.jsx";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "test", ext: ".jsx" });
	});

	test("should detect spec TSX files", async () => {
		const path = "path/to/Layout.spec.tsx";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "test", ext: ".tsx" });
	});

	test("should detect SCSS modules", async () => {
		const path = "path/to/Layout.module.scss";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "style", ext: ".scss" });
	});

	test("should detect CSS modules", async () => {
		const path = "path/to/Layout.module.css";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "style", ext: ".css" });
	});

	test("should detect SCSS files", async () => {
		const path = "path/to/Layout.scss";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "style", ext: ".scss" });
	});

	test("should detect CSS files", async () => {
		const path = "path/to/Layout.css";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "style", ext: ".css" });
	});

	test("should detect TSX source files", async () => {
		const path = "path/to/Layout.tsx";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "source", ext: ".tsx" });
	});

	test("should detect JS source files", async () => {
		const path = "path/to/Layout.js";
		const value = inferFileProperties(path);
		expect(value).toEqual({ basename: "Layout", type: "source", ext: ".js" });
	});

	test("should return other files as unknown", async () => {
		const path = "path/to/Design.Final.figma";
		const value = inferFileProperties(path);
		expect(value).toEqual({
			basename: "Design.Final",
			type: "unknown",
			ext: ".figma",
		});
	});
});
