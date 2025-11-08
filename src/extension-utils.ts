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
	return {
		testPaths: readConfigValue("test-path", "tests|test|.").split("|"),
		storyPaths: readConfigValue("story-path", "stories|story|.").split("|"),
		stylePaths: readConfigValue("style-path", "styles|style|.").split("|"),
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
