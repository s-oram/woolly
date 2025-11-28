import { findFirstExistingFile } from "./findFirstExistingFile";
import { getPrimaryCandidates } from "./getPrimaryCandidates";
import { getStorybookCandidates } from "./getStorybookCandidates";
import { getStyleCandidates } from "./getStyleCandidates";
import { getTestCandidates } from "./getTestCandidates";
import { inferFileProperties } from "./inferFileProperties";

/**
 * Finds the primary file of a file group.
 * `Button.tsx` for example.
 */
export const findPrimaryFile = (
	activeEditorPath: string,
): string | undefined => {
	const fileProperties = inferFileProperties(activeEditorPath);
	const candidates = getPrimaryCandidates(fileProperties);
	const primaryFile = findFirstExistingFile(candidates);
	return primaryFile;
};

export const findStoryFile = (activeEditorPath: string): string | undefined => {
	const primaryFile = findPrimaryFile(activeEditorPath);
	if (primaryFile === undefined) {
		return undefined;
	}
	const fileProperties = inferFileProperties(primaryFile);
	const candidates = getStorybookCandidates(fileProperties);
	const storyFile = findFirstExistingFile(candidates);
	return storyFile;
};

export const findStyleFile = (activeEditorPath: string): string | undefined => {
	const primaryFile = findPrimaryFile(activeEditorPath);
	if (primaryFile === undefined) {
		return undefined;
	}
	const fileProperties = inferFileProperties(primaryFile);
	const candidates = getStyleCandidates(fileProperties);
	const styleFile = findFirstExistingFile(candidates);
	return styleFile;
};

export const findTestFile = (activeEditorPath: string): string | undefined => {
	const primaryFile = findPrimaryFile(activeEditorPath);
	if (primaryFile === undefined) {
		return undefined;
	}
	const fileProperties = inferFileProperties(primaryFile);
	const candidates = getTestCandidates(fileProperties);
	const testFile = findFirstExistingFile(candidates);
	return testFile;
};
