import { getStyleCandidates } from "./getStyleCandidates";
import { inferFileProperties } from "./inferFileProperties";

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

describe("getStyleCandidates", () => {
	test("should return candidates for /FancyButton.tsx", async () => {
		const properties = inferFileProperties(
			"path/components/stories/FancyButton.tsx",
		);
		const candidates = getStyleCandidates(properties);
		expect(candidates).toEqual(expectedCandidates);
	});
});
