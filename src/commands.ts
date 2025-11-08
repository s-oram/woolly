import * as vscode from "vscode";

const getWorkspaceFolders = () => {
	const folders = vscode.workspace.workspaceFolders || [];
	return folders.map((folder) => folder.uri.fsPath);
};

export const openSource = (outputChannel: vscode.OutputChannel) => () => {
	outputChannel.show(true);
	outputChannel.appendLine(`foobar1`);

	const folders = getWorkspaceFolders();
	outputChannel.appendLine(`foobar2`);
	outputChannel.appendLine(`::: folders: ${folders}`);

	vscode.window.showInformationMessage("openSource");
};

export const openStories = () => {
	vscode.window.showInformationMessage("openStories");
};

export const openStyles = () => {
	vscode.window.showInformationMessage("openStyles");
};

export const openTests = () => {
	vscode.window.showInformationMessage("openTests");
};
