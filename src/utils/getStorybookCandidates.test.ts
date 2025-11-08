import { getStorybookCandidates } from "./getStorybookCandidates";
import { inferFileProperties } from "./inferFileProperties";

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

describe("getStorybookCandidates", () => {
	test("should return candidates for /FancyButton.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.tsx",
		);
		const candidates = getStorybookCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});

	test("should return candidates for /stories/FancyButton.stories.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.stories.tsx",
		);
		const candidates = getStorybookCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});

	test("should return candidates for /tests/FancyButton.test.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/tests/FancyButton.test.tsx",
		);
		const candidates = getStorybookCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});

	test("should return candidates for /styles/FancyButton.module.scss", async () => {
		const properties = inferFileProperties(
			"path/components/styles/FancyButton.module.scss",
		);
		const candidates = getStorybookCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});
});
