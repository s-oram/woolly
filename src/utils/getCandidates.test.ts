import {
	getPrimaryCandidates,
	getStorybookCandidates,
	getStyleCandidates,
	getTestCandidates,
} from "./getCandidates";
import { inferFileProperties } from "./inferFileProperties";

const expectedCandidates = [
	"path/components/fancy-button.js",
	"path/components/fancy-button.jsx",
	"path/components/fancy-button.ts",
	"path/components/fancy-button.tsx",
	"path/components/FancyButton.js",
	"path/components/FancyButton.jsx",
	"path/components/FancyButton.ts",
	"path/components/FancyButton.tsx",
];
describe("getPrimaryCandidates", () => {
	test("should return candidates for /fancy-button.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/fancy-button.tsx",
		);
		const candidates = getPrimaryCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});
	test("should return candidates for /stories/FancyButton.stories.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.stories.tsx",
		);
		const candidates = getPrimaryCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});

	test("should return candidates for /tests/FancyButton.test.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/tests/FancyButton.test.tsx",
		);
		const candidates = getPrimaryCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});

	test("should return candidates for /styles/FancyButton.module.scss", async () => {
		const properties = inferFileProperties(
			"path/components/styles/FancyButton.module.scss",
		);
		const candidates = getPrimaryCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});
});

describe("getStorybookCandidates", () => {
	test("should return candidates for /FancyButton.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.tsx",
		);

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
		];

		expect(candidates).toEqual(expectedCandidates);
	});
});

describe("getStyleCandidates", () => {
	test("should return candidates for /FancyButton.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.tsx",
		);
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
		];

		expect(candidates).toEqual(expectedCandidates);
	});
});

describe("getTestCandidates", () => {
	test("should return candidates for /FancyButton.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.tsx",
		);
		const candidates = getTestCandidates(properties);

		const expectedCandidates = [
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
		];

		expect(candidates).toEqual(expectedCandidates);
	});
});
