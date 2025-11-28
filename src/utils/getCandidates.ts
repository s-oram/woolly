import path from "node:path";
import { kebabCase, pascalCase } from "text-case";
import invariant from "tiny-invariant";
import { generateStrings } from "./generateStrings";
import type { FileProperties } from "./inferFileProperties";
import { trimLastDirIfMatch } from "./trimLastDir";

export const getPrimaryCandidates = (properties: FileProperties): string[] => {
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
				[pascalCase(properties.basename), kebabCase(properties.basename)],
				[".tsx", ".ts", ".jsx", ".js"],
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

export const getStyleCandidates = (properties: FileProperties): string[] => {
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
		["", `styles${sep}`],
		[pascalCase(properties.basename), kebabCase(properties.basename)],
		[".module.scss", ".module.css", ".scss", ".css"],
	);
};

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
