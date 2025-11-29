import type * as vscode from "vscode";
import { getContext, openFilePathInEditor } from "./extension-utils";
import {
	findPrimaryFile,
	findStoryFile,
	findStyleFile,
	findTestFile,
} from "./utils/findFile";

export const openPrimary =
	(outputChannel: vscode.OutputChannel) => async () => {
		outputChannel.show(true);
		const context = getContext();

		if (context.activeEditorPath) {
			outputChannel.appendLine(
				`Opening primary for: "${context.activeEditorPath}"`,
			);
			const fileToOpen = findPrimaryFile(context.activeEditorPath);
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
			const fileToOpen = findStoryFile(context.activeEditorPath);
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

		const fileToOpen = findStyleFile(context.activeEditorPath);
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
		const fileToOpen = findTestFile(context.activeEditorPath);
		if (fileToOpen) {
			await openFilePathInEditor(fileToOpen, outputChannel);
		} else {
			outputChannel.appendLine(
				`Cannot find file to open for: "${context.activeEditorPath}"`,
			);
		}
	}
};
