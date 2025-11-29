import {
	getPrimaryCandidates,
	getStorybookCandidates,
	getStyleCandidates,
	getTestCandidates,
} from "./getCandidates";
import { inferFileProperties } from "./inferFileProperties";

/*
	This group of tests assumes component files are grouped together in
	a single directory:

	/components/Button.tsx
	/components/Button.test.tsx
	/components/Button.module.scss
	/components/Button.stories.tsx

	Or are grouped in sub-directories under the primary component file.

	/components/Button.tsx
	/components/tests/Button.test.tsx
	/components/styles/Button.module.scss
	/components/stories/Button.stories.tsx
*/

describe("getPrimaryCandidates", () => {
	const expectedCandidates = [
		"path/components/fancy-button.js",
		"path/components/fancy-button.jsx",
		"path/components/fancy-button.ts",
		"path/components/fancy-button.tsx",
		"path/components/FancyButton.js",
		"path/components/FancyButton.jsx",
		"path/components/FancyButton.ts",
		"path/components/FancyButton.tsx",
	].sort();

	test("should return candidates for /stories/FancyButton.stories.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.stories.tsx",
		);
		const candidates = getPrimaryCandidates(properties);
		expect(candidates.sort()).toEqual(expectedCandidates);
	});

	test("should return candidates for /tests/FancyButton.test.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/tests/FancyButton.test.tsx",
		);
		const candidates = getPrimaryCandidates(properties);
		expect(candidates.sort()).toEqual(expectedCandidates);
	});

	test("should return candidates for /styles/FancyButton.module.scss", async () => {
		const properties = inferFileProperties(
			"path/components/styles/FancyButton.module.scss",
		);
		const candidates = getPrimaryCandidates(properties);
		expect(candidates.sort()).toEqual(expectedCandidates);
	});
});

describe("getStorybookCandidates", () => {
	test("should return storybook candidates for /FancyButton.tsx", async () => {
		const properties = inferFileProperties("path/components/FancyButton.tsx");
		const candidates = getStorybookCandidates(properties);

		const expectedCandidates = [
			"path/components/fancy-button.stories.js",
			"path/components/fancy-button.stories.jsx",
			"path/components/fancy-button.stories.tsx",
			"path/components/FancyButton.stories.js",
			"path/components/FancyButton.stories.jsx",
			"path/components/FancyButton.stories.tsx",
			"path/components/stories/fancy-button.stories.js",
			"path/components/stories/fancy-button.stories.jsx",
			"path/components/stories/fancy-button.stories.tsx",
			"path/components/stories/FancyButton.stories.js",
			"path/components/stories/FancyButton.stories.jsx",
			"path/components/stories/FancyButton.stories.tsx",
			"path/stories/fancy-button.stories.js",
			"path/stories/fancy-button.stories.jsx",
			"path/stories/fancy-button.stories.tsx",
			"path/stories/FancyButton.stories.js",
			"path/stories/FancyButton.stories.jsx",
			"path/stories/FancyButton.stories.tsx",
		].sort();

		expect(candidates.sort()).toEqual(expectedCandidates);
	});
});

describe("getStyleCandidates", () => {
	test("should return candidates for /FancyButton.tsx", async () => {
		const properties = inferFileProperties("path/components/FancyButton.tsx");
		const candidates = getStyleCandidates(properties);

		const expectedCandidates = [
			"path/components/fancy-button.css",
			"path/components/fancy-button.module.css",
			"path/components/fancy-button.module.scss",
			"path/components/fancy-button.scss",
			"path/components/FancyButton.css",
			"path/components/FancyButton.module.css",
			"path/components/FancyButton.module.scss",
			"path/components/FancyButton.scss",
			"path/components/styles/fancy-button.css",
			"path/components/styles/fancy-button.module.css",
			"path/components/styles/fancy-button.module.scss",
			"path/components/styles/fancy-button.scss",
			"path/components/styles/FancyButton.css",
			"path/components/styles/FancyButton.module.css",
			"path/components/styles/FancyButton.module.scss",
			"path/components/styles/FancyButton.scss",
			"path/styles/fancy-button.css",
			"path/styles/fancy-button.module.css",
			"path/styles/fancy-button.module.scss",
			"path/styles/fancy-button.scss",
			"path/styles/FancyButton.css",
			"path/styles/FancyButton.module.css",
			"path/styles/FancyButton.module.scss",
			"path/styles/FancyButton.scss",
		].sort();

		expect(candidates.sort()).toEqual(expectedCandidates);
	});
});

describe("getTestCandidates", () => {
	test("should return candidates for /FancyButton.tsx", async () => {
		const properties = inferFileProperties("path/components/FancyButton.tsx");
		const candidates = getTestCandidates(properties);

		const expectedCandidates = [
			"path/__tests__/fancy-button.test.js",
			"path/__tests__/fancy-button.test.jsx",
			"path/__tests__/fancy-button.test.ts",
			"path/__tests__/fancy-button.test.tsx",
			"path/__tests__/FancyButton.test.js",
			"path/__tests__/FancyButton.test.jsx",
			"path/__tests__/FancyButton.test.ts",
			"path/__tests__/FancyButton.test.tsx",
			"path/components/__tests__/fancy-button.test.js",
			"path/components/__tests__/fancy-button.test.jsx",
			"path/components/__tests__/fancy-button.test.ts",
			"path/components/__tests__/fancy-button.test.tsx",
			"path/components/__tests__/FancyButton.test.js",
			"path/components/__tests__/FancyButton.test.jsx",
			"path/components/__tests__/FancyButton.test.ts",
			"path/components/__tests__/FancyButton.test.tsx",
			"path/components/fancy-button.test.js",
			"path/components/fancy-button.test.jsx",
			"path/components/fancy-button.test.ts",
			"path/components/fancy-button.test.tsx",
			"path/components/FancyButton.test.js",
			"path/components/FancyButton.test.jsx",
			"path/components/FancyButton.test.ts",
			"path/components/FancyButton.test.tsx",
			"path/components/tests/fancy-button.test.js",
			"path/components/tests/fancy-button.test.jsx",
			"path/components/tests/fancy-button.test.ts",
			"path/components/tests/fancy-button.test.tsx",
			"path/components/tests/FancyButton.test.js",
			"path/components/tests/FancyButton.test.jsx",
			"path/components/tests/FancyButton.test.ts",
			"path/components/tests/FancyButton.test.tsx",
			"path/tests/fancy-button.test.js",
			"path/tests/fancy-button.test.jsx",
			"path/tests/fancy-button.test.ts",
			"path/tests/fancy-button.test.tsx",
			"path/tests/FancyButton.test.js",
			"path/tests/FancyButton.test.jsx",
			"path/tests/FancyButton.test.ts",
			"path/tests/FancyButton.test.tsx",
		].sort();

		expect(candidates.sort()).toEqual(expectedCandidates);
	});
});

/*
	This group of tests assumes component files are split across multiple
	directories like:

	/feature/components/Button.tsx
	/feature/tests/Button.test.tsx
	/feature/styles/Button.module.scss
	/feature/stories/Button.stories.tsx
*/

describe("getPrimaryCandidates with multiple directories", () => {
	test("should return primary candidates for /feature/stories/FancyButton.stories.tsx", async () => {
		const properties = inferFileProperties(
			"feature/stories/FancyButton.stories.tsx",
		);
		const candidates = getPrimaryCandidates(properties);
		expect(candidates).toContain("feature/components/FancyButton.tsx");
	});
});

describe("getStorybookCandidates with multiple directories", () => {
	test("should return Storybook candidates for /feature/components/FancyButton.tsx", async () => {
		const properties = inferFileProperties(
			"feature/components/FancyButton.tsx",
		);
		const candidates = getStorybookCandidates(properties);
		expect(candidates).toContain("feature/stories/FancyButton.stories.tsx");
	});
});
