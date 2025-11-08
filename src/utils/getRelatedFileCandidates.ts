import path from "node:path";
import { kebabCase, pascalCase } from "text-case";
import type { FileProperties } from "./inferFileProperties";
import { trimLastDirIfMatch } from "./trimLastDir";

export const getSourceCandidates = (properties: FileProperties): string[] => {
	const dirname = trimLastDirIfMatch(properties.dirname, [
		"stories",
		"tests",
		"styles",
	]);

	switch (properties.type) {
		case "source": {
			return [
				[dirname, `${properties.basename}${properties.ext}`].join(path.sep),
			];
		}
		case "test":
		case "storybook": {
			return [
				[dirname, `${pascalCase(properties.basename)}${properties.ext}`].join(
					path.sep,
				),
				[dirname, `${kebabCase(properties.basename)}${properties.ext}`].join(
					path.sep,
				),
			];
		}
		case "style": {
			return [
				[dirname, `${pascalCase(properties.basename)}.tsx`].join(path.sep),
				[dirname, `${pascalCase(properties.basename)}.ts`].join(path.sep),
				[dirname, `${pascalCase(properties.basename)}.jsx`].join(path.sep),
				[dirname, `${pascalCase(properties.basename)}.js`].join(path.sep),
				[dirname, `${kebabCase(properties.basename)}.tsx`].join(path.sep),
				[dirname, `${kebabCase(properties.basename)}.ts`].join(path.sep),
				[dirname, `${kebabCase(properties.basename)}.jsx`].join(path.sep),
				[dirname, `${kebabCase(properties.basename)}.js`].join(path.sep),
			];
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
