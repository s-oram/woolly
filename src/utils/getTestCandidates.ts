import path from "node:path";
import { kebabCase, pascalCase } from "text-case";
import { generateStrings } from "./generateStrings";
import type { FileProperties } from "./inferFileProperties";
import { trimLastDirIfMatch } from "./trimLastDir";

export const getTestCandidates = (properties: FileProperties): string[] => {
	const sep = path.sep;

	const dirname = trimLastDirIfMatch(properties.dirname, [
		"stories",
		"tests",
		"styles",
	]);

	switch (properties.type) {
		case "source":
		case "test":
		case "storybook":
		case "style": {
			return generateStrings(
				dirname,
				sep,
				["", `tests${sep}`],
				[pascalCase(properties.basename), kebabCase(properties.basename)],
				[".test.tsx", ".test.ts", ".test.jsx", ".test.js"],
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
