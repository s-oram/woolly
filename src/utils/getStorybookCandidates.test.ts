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
});
