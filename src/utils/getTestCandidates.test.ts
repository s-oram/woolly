import { getTestCandidates } from "./getTestCandidates";
import { inferFileProperties } from "./inferFileProperties";

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

describe("getTestCandidates", () => {
	test("should return candidates for /FancyButton.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.tsx",
		);
		const candidates = getTestCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});
});
