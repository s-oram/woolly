import path from "node:path";
import { kebabCase, pascalCase } from "text-case";
import invariant from "tiny-invariant";
import { generateStrings } from "./generateStrings";
import type { FileProperties } from "./inferFileProperties";
import { trimLastDirIfMatch } from "./trimLastDir";

export const getTestCandidates = (properties: FileProperties): string[] => {
	invariant(properties.type === "primary");

	const sep = path.sep;

	const dirname = trimLastDirIfMatch(properties.dirname, [
		"stories",
		"tests",
		"styles",
	]);

	return generateStrings(
		dirname,
		sep,
		["", `tests${sep}`],
		[pascalCase(properties.basename), kebabCase(properties.basename)],
		[".test.tsx", ".test.ts", ".test.jsx", ".test.js"],
	);
};
