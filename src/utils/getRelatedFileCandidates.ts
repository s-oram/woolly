import path from "node:path";
import type { FileProperties } from "./inferFileProperties";
import { trimLastDirIfMatch } from "./trimLastDir";

export const getSourceCandidates = (properties: FileProperties): string[] => {
	const dirname = trimLastDirIfMatch(properties.dirname, [
		"stories",
		"tests",
		"styles",
	]);

	switch (properties.type) {
		case "storybook": {
			return [
				[dirname, `${properties.basename}${properties.ext}`].join(path.sep),
			];
		}
		case "style": {
			return [
				[dirname, `${properties.basename}.tsx`].join(path.sep),
				[dirname, `${properties.basename}.ts`].join(path.sep),
				[dirname, `${properties.basename}.jsx`].join(path.sep),
				[dirname, `${properties.basename}.js`].join(path.sep),
			];
		}
		case "source": {
			return [
				[dirname, `${properties.basename}${properties.ext}`].join(path.sep),
			];
		}
		case "test": {
			return [
				[dirname, `${properties.basename}${properties.ext}`].join(path.sep),
			];
		}
		case "unknown": {
			return [
				[dirname, `${properties.basename}${properties.ext}`].join(path.sep),
			];
		}
		default: {
			const _exhaustiveCheck: never = properties.type;
			return _exhaustiveCheck;
		}
	}
};
