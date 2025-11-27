import fs from "node:fs";
import path from "node:path";

export const findFirstExistingFile = (
	filePaths: string[],
): string | undefined => {
	return filePaths.find((filePath) => fileExistsWithCaseSync(filePath));
};

/**
 * Check if file exists with a workaround for performing a case-sensitive
 * check on case-insensitive file systems.
 *
 * This is needed when asking VS Code to open a file for cosmetic reasons.
 */
const fileExistsWithCaseSync = (filePath: string) => {
	const dir = path.dirname(filePath);
	const filename = path.basename(filePath);

	// Base case: if we reach the root directory, it exists (or the path is invalid)
	if (filePath === "/" || filePath === "." || dir === filePath) {
		return true;
	}

	try {
		const filenamesInDir = fs.readdirSync(dir);
		if (filenamesInDir.indexOf(filename) === -1) {
			return false; // Filename with exact case not found in the directory
		}
	} catch {
		return false;
	}

	// Recursively check the parent directory for case sensitivity
	return fileExistsWithCaseSync(dir);
};
