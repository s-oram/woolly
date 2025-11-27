import path from "node:path";
import { kebabCase, pascalCase } from "text-case";
import { generateStrings } from "./generateStrings";
import type { FileProperties } from "./inferFileProperties";
import { trimLastDirIfMatch } from "./trimLastDir";

export const getStorybookCandidates = (
	properties: FileProperties,
): string[] => {
	const sep = path.sep;

	const dirname = trimLastDirIfMatch(properties.dirname, [
		"stories",
		"tests",
		"styles",
	]);

	switch (properties.type) {
		case "primary":
		case "test":
		case "storybook":
		case "style": {
			return generateStrings(
				dirname,
				sep,
				["", `stories${sep}`],
				[pascalCase(properties.basename), kebabCase(properties.basename)],
				[".stories.tsx", ".stories.jsx", ".stories.js"],
			);
		}
		case "unknown": {
			return [];
		}
		default: {
			const _exhaustiveCheck: never = properties.type;
			return _exhaustiveCheck;
		}
	}
};
