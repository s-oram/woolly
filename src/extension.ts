import * as vscode from "vscode";
import { gotoPrimary, gotoStories, gotoStyles, gotoTests } from "./commands";

export function activate(context: vscode.ExtensionContext) {
	const outputChannel = vscode.window.createOutputChannel("Woolly");
	outputChannel.appendLine("Woolly extension initialised");

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"woolly.gotoPrimary",
			gotoPrimary(outputChannel),
		),
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"woolly.gotoStories",
			gotoStories(outputChannel),
		),
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"woolly.gotoStyles",
			gotoStyles(outputChannel),
		),
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"woolly.gotoTests",
			gotoTests(outputChannel),
		),
	);

	context.subscriptions.push(outputChannel);
}

export function deactivate() {}
