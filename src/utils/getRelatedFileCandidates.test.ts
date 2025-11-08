import { getSourceCandidates } from "./getRelatedFileCandidates";
import { inferFileProperties } from "./inferFileProperties";

describe("getSourceCandidates", () => {
	test("should return candidates for /stories/FancyButton.stories.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.stories.tsx",
		);
		const candidates = getSourceCandidates(properties);
		expect(candidates).toEqual(["path/components/FancyButton.tsx"]);
	});
});
