import type * as vscode from "vscode";
import { getContext, openFilePathInEditor } from "./extension-utils";
import { findFirstExistingFile } from "./utils/findFirstExistingFile";
import { getSourceCandidates } from "./utils/getSourceCandidates";
import { getStorybookCandidates } from "./utils/getStorybookCandidates";
import { getStyleCandidates } from "./utils/getStyleCandidates";
import { getTestCandidates } from "./utils/getTestCandidates";
import { inferFileProperties } from "./utils/inferFileProperties";

export const openSource = (outputChannel: vscode.OutputChannel) => async () => {
	outputChannel.show(true);
	const context = getContext();

	if (context.activeEditorPath) {
		outputChannel.appendLine(
			`Opening source for: "${context.activeEditorPath}"`,
		);
		const fileToOpen = findFirstExistingFile(
			getSourceCandidates(inferFileProperties(context.activeEditorPath)),
		);
		if (fileToOpen) {
			await openFilePathInEditor(fileToOpen, outputChannel);
		} else {
			outputChannel.appendLine(
				`Cannot find file to open for: "${context.activeEditorPath}"`,
			);
		}
	}
};

export const openStories =
	(outputChannel: vscode.OutputChannel) => async () => {
		outputChannel.show(true);
		outputChannel.appendLine(`Opening...`);

		const context = getContext();

		if (context.activeEditorPath) {
			outputChannel.appendLine(
				`Opening stories for: "${context.activeEditorPath}"`,
			);

			const fileToOpen = findFirstExistingFile(
				getStorybookCandidates(inferFileProperties(context.activeEditorPath)),
			);
			if (fileToOpen) {
				await openFilePathInEditor(fileToOpen, outputChannel);
			} else {
				outputChannel.appendLine(
					`Cannot find file to open for: "${context.activeEditorPath}"`,
				);
			}
		}
	};

export const openStyles = (outputChannel: vscode.OutputChannel) => async () => {
	outputChannel.show(true);
	outputChannel.appendLine(`Opening...`);

	const context = getContext();

	if (context.activeEditorPath) {
		outputChannel.appendLine(
			`Opening styles for: "${context.activeEditorPath}"`,
		);

		const fileToOpen = findFirstExistingFile(
			getStyleCandidates(inferFileProperties(context.activeEditorPath)),
		);
		if (fileToOpen) {
			await openFilePathInEditor(fileToOpen, outputChannel);
		} else {
			outputChannel.appendLine(
				`Cannot find file to open for: "${context.activeEditorPath}"`,
			);
		}
	}
};

export const openTests = (outputChannel: vscode.OutputChannel) => async () => {
	outputChannel.show(true);
	outputChannel.appendLine(`Opening...`);

	const context = getContext();

	if (context.activeEditorPath) {
		outputChannel.appendLine(
			`Opening tests for: "${context.activeEditorPath}"`,
		);

		const fileToOpen = findFirstExistingFile(
			getTestCandidates(inferFileProperties(context.activeEditorPath)),
		);
		if (fileToOpen) {
			await openFilePathInEditor(fileToOpen, outputChannel);
		} else {
			outputChannel.appendLine(
				`Cannot find file to open for: "${context.activeEditorPath}"`,
			);
		}
	}
};
