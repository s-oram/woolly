import path from "node:path";
import type { FileProperties } from "./inferFileProperties";
import { trimLastDirIfMatch } from "./trimLastDir";

export const getSourceCandidates = (properties: FileProperties): string[] => {
	const dirname = trimLastDirIfMatch(properties.dirname, ["stories"]);
	return [[dirname, `${properties.basename}${properties.ext}`].join(path.sep)];
};
