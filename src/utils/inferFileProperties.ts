import path from "node:path";

export type FileProperties = {
	dirname: string;
	basename: string;
	type: "storybook" | "test" | "style" | "source" | "unknown";
	ext: string;
};

export const inferFileProperties = (filepath: string): FileProperties => {
	const filename = path.basename(filepath);

	const dirname = path.dirname(filepath);

	const storybookRegex = /^(.+?)\.(stories)\.(tsx|ts|jsx|js)$/.exec(filename);

	if (storybookRegex && storybookRegex[0] !== null) {
		return {
			dirname,
			basename: storybookRegex[1],
			type: "storybook",
			ext: path.extname(filepath),
		};
	}

	const testRegex = /^(.+?)\.(test|spec)\.(tsx|ts|jsx|js)$/.exec(filename);

	if (testRegex && testRegex[0] !== null) {
		return {
			dirname,
			basename: testRegex[1],
			type: "test",
			ext: path.extname(filepath),
		};
	}

	const styleModuleRegex = /^(.+?)\.(module)\.(scss|css)$/.exec(filename);

	if (styleModuleRegex && styleModuleRegex[0] !== null) {
		return {
			dirname,
			basename: styleModuleRegex[1],
			type: "style",
			ext: path.extname(filepath),
		};
	}

	const styleRegex = /^(.+?)\.(scss|css)$/.exec(filename);

	if (styleRegex && styleRegex[0] !== null) {
		return {
			dirname,
			basename: styleRegex[1],
			type: "style",
			ext: path.extname(filepath),
		};
	}

	const sourceRegex = /^(.+?)\.(tsx|ts|jsx|js)$/.exec(filename);

	if (sourceRegex && sourceRegex[0] !== null) {
		return {
			dirname,
			basename: sourceRegex[1],
			type: "source",
			ext: path.extname(filepath),
		};
	}

	return {
		dirname,
		basename: path.basename(filepath, path.extname(filepath)),
		type: "unknown",
		ext: path.extname(filepath),
	};
};
