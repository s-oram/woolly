import * as vscode from "vscode";
import { openSource, openStories, openStyles, openTests } from "./commands";

export function activate(context: vscode.ExtensionContext) {
	const outputChannel = vscode.window.createOutputChannel("Go To Code");
	outputChannel.append("initialized");

	outputChannel.show(false);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"go-to-code.openSource",
			openSource(outputChannel),
		),
	);

	context.subscriptions.push(
		vscode.commands.registerCommand("go-to-code.openStories", openStories),
	);
	context.subscriptions.push(
		vscode.commands.registerCommand("go-to-code.openStyles", openStyles),
	);
	context.subscriptions.push(
		vscode.commands.registerCommand("go-to-code.openTests", openTests),
	);

	context.subscriptions.push(outputChannel);
}

export function deactivate() {}
