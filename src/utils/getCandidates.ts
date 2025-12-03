import path from "node:path";
import { kebabCase, pascalCase } from "text-case";
import invariant from "tiny-invariant";
import { generateStrings } from "./generateStrings";
import type { FileProperties } from "./inferFileProperties";
import { trimLastDir, trimLastDirIfMatch } from "./trimLastDir";

export const getPrimaryCandidates = (properties: FileProperties): string[] => {
	invariant(properties.type !== "primary");

	const dirname = trimLastDirIfMatch(properties.dirname, [
		"stories",
		"tests",
		"styles",
		"__tests__",
	]);

	const lastSegment = dirname.split(path.sep).pop();

	switch (properties.type) {
		case "test":
		case "storybook":
		case "style": {
			return generateStrings(
				dirname,
				path.sep,
				lastSegment === "components" ? "" : ["", `components${path.sep}`],
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

	const lastSegment = properties.dirname.split(path.sep).pop();

	const group1 = generateStrings(
		properties.dirname,
		path.sep,
		["", `stories${path.sep}`],
		[pascalCase(properties.basename), kebabCase(properties.basename)],
		[".stories.tsx", ".stories.jsx", ".stories.js"],
	);

	const group2 =
		lastSegment === "components"
			? generateStrings(
					trimLastDir(properties.dirname),
					path.sep,
					`stories${path.sep}`,
					[pascalCase(properties.basename), kebabCase(properties.basename)],
					[".stories.tsx", ".stories.jsx", ".stories.js"],
				)
			: [];

	return [...group1, ...group2];
};

export const getStyleCandidates = (properties: FileProperties): string[] => {
	invariant(properties.type === "primary");

	const lastSegment = properties.dirname.split(path.sep).pop();

	const group1 = generateStrings(
		properties.dirname,
		path.sep,
		["", `styles${path.sep}`],
		[pascalCase(properties.basename), kebabCase(properties.basename)],
		[".module.scss", ".module.css", ".scss", ".css"],
	);

	const group2 =
		lastSegment === "components"
			? generateStrings(
					trimLastDir(properties.dirname),
					path.sep,
					`styles${path.sep}`,
					[pascalCase(properties.basename), kebabCase(properties.basename)],
					[".module.scss", ".module.css", ".scss", ".css"],
				)
			: [];

	return [...group1, ...group2];
};

export const getTestCandidates = (properties: FileProperties): string[] => {
	invariant(properties.type === "primary");

	const lastSegment = properties.dirname.split(path.sep).pop();

	const group1 = generateStrings(
		properties.dirname,
		path.sep,
		["", `tests${path.sep}`, `__tests__${path.sep}`],
		[pascalCase(properties.basename), kebabCase(properties.basename)],
		[".spec", ".test"],
		[".tsx", ".ts", ".jsx", ".js"],
	);

	const group2 =
		lastSegment === "components"
			? generateStrings(
					trimLastDir(properties.dirname),
					path.sep,
					[`tests${path.sep}`, `__tests__${path.sep}`],
					[pascalCase(properties.basename), kebabCase(properties.basename)],
					[".spec", ".test"],
					[".tsx", ".ts", ".jsx", ".js"],
				)
			: [];

	return [...group1, ...group2];
};
