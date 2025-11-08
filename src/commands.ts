import * as vscode from "vscode";
import { getContext } from "./extension-utils";

export const openSource = (outputChannel: vscode.OutputChannel) => async () => {
	outputChannel.show(true);

	const context = getContext();

	if (context.activeEditorPath) {
		/*
		outputChannel.appendLine(activeEditor.document.uri.fsPath);
		const uri = vscode.Uri.file(
			"/Users/shannon/dev/webdev/shared-react-components/src/components/atoms/Layout.tsx",
		);
		const doc = await vscode.workspace.openTextDocument(uri);
		await vscode.window.showTextDocument(doc);
		vscode.window.showInformationMessage("openSource");
		*/
	}
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
