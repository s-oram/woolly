import * as vscode from "vscode";
import type { Context, ExtensionConfig } from "./types";

/** Returns all active workspace directories */
export const getWorkspaceFolders = () => {
	const folders = vscode.workspace.workspaceFolders || [];
	return folders.map((folder) => folder.uri.fsPath);
};

const readConfigValue = (key: string, defaultValue: string) => {
	const section = vscode.workspace.getConfiguration("go-to-code");
	const value = section.get<string>(key, defaultValue);
	return value;
};

const readConfig = (): ExtensionConfig => {
	const section = vscode.workspace.getConfiguration("go-to-code");

	return {
		storyPaths: readConfigValue("storyPath", "stories|story").split("|"),
		stylePaths: readConfigValue("stylePath", "styles|style").split("|"),
		testPaths: readConfigValue("testPath", "tests|test").split("|"),

		sourceNameCase: section.get<string>("sourceNameCase"),
		storyNameCase: section.get<string>("storyNameCase"),
		styleNameCase: section.get<string>("styleNameCase"),
		testNameCase: section.get<string>("testNameCase"),
	};
};

export const getContext = (): Context => {
	const activeEditor = vscode.window.activeTextEditor;
	return {
		activeEditorPath: activeEditor?.document.uri.fsPath || undefined,
		workspaceFolders: getWorkspaceFolders(),
		config: readConfig(),
	};
};
