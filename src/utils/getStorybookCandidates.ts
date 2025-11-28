import path from "node:path";
import { kebabCase, pascalCase } from "text-case";
import invariant from "tiny-invariant";
import { generateStrings } from "./generateStrings";
import type { FileProperties } from "./inferFileProperties";
import { trimLastDirIfMatch } from "./trimLastDir";

export const getStorybookCandidates = (
	properties: FileProperties,
): string[] => {
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
		["", `stories${sep}`],
		[pascalCase(properties.basename), kebabCase(properties.basename)],
		[".stories.tsx", ".stories.jsx", ".stories.js"],
	);
};
