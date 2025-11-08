import path from "node:path";

export const trimLastDirIfMatch = (filepath: string, toTrim: string[]) => {
	if (path.isAbsolute(filepath)) {
		const parts = filepath.split(path.sep);

		const lastPart = parts[parts.length - 1];

		return parts.length > 2 && toTrim.includes(lastPart)
			? parts.slice(0, -1).join(path.sep)
			: filepath;
	} else {
		const parts = filepath.split(path.sep).filter((segment) => segment !== "");
		const lastPart = parts[parts.length - 1];
		return parts.length > 1 && toTrim.includes(lastPart)
			? parts.slice(0, -1).join(path.sep)
			: filepath;
	}
};
