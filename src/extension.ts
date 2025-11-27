import * as vscode from "vscode";
import { openPrimary, openStories, openStyles, openTests } from "./commands";

export function activate(context: vscode.ExtensionContext) {
	const outputChannel = vscode.window.createOutputChannel("Go To Code");

	outputChannel.appendLine("Go To Code extension initialised");

	outputChannel.show(false);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"go-to-code.openPrimary",
			openPrimary(outputChannel),
		),
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"go-to-code.openStories",
			openStories(outputChannel),
		),
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"go-to-code.openStyles",
			openStyles(outputChannel),
		),
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"go-to-code.openTests",
			openTests(outputChannel),
		),
	);

	context.subscriptions.push(outputChannel);
}

export function deactivate() {}
