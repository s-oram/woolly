import { getPrimaryCandidates } from "./getPrimaryCandidates";
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
