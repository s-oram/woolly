import { getSourceCandidates } from "./getRelatedFileCandidates";
import { inferFileProperties } from "./inferFileProperties";

describe("getSourceCandidates", () => {
	test("should return candidates for /stories/FancyButton.stories.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.stories.tsx",
		);
		const candidates = getSourceCandidates(properties);
		expect(candidates).toEqual([
			"path/components/FancyButton.tsx",
			"path/components/fancy-button.tsx",
		]);
	});

	test("should return candidates for /tests/FancyButton.test.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/tests/FancyButton.test.tsx",
		);
		const candidates = getSourceCandidates(properties);
		expect(candidates).toEqual([
			"path/components/FancyButton.tsx",
			"path/components/fancy-button.tsx",
		]);
	});

	test("should return candidates for /styles/FancyButton.module.scss", async () => {
		const properties = inferFileProperties(
			"path/components/styles/FancyButton.module.scss",
		);
		const candidates = getSourceCandidates(properties);
		expect(candidates).toEqual([
			"path/components/FancyButton.tsx",
			"path/components/FancyButton.ts",
			"path/components/FancyButton.jsx",
			"path/components/FancyButton.js",
			"path/components/fancy-button.tsx",
			"path/components/fancy-button.ts",
			"path/components/fancy-button.jsx",
			"path/components/fancy-button.js",
		]);
	});
});
