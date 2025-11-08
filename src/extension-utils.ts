import * as vscode from "vscode";

/** Returns all active workspace directories */
export const getWorkspaceFolders = () => {
	const folders = vscode.workspace.workspaceFolders || [];
	return folders.map((folder) => folder.uri.fsPath);
};
