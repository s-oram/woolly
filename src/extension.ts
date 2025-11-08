import * as vscode from 'vscode';
import { openSource, openStories, openStyles, openTests } from './commands';

export function activate(context: vscode.ExtensionContext) {
	const outputChannel = vscode.window.createOutputChannel('Goto Code');
	outputChannel.append('initialized');

	outputChannel.show(false);

	context.subscriptions.push(vscode.commands.registerCommand('goto-code.openSource', openSource(outputChannel)));
	context.subscriptions.push(vscode.commands.registerCommand('goto-code.openStories', openStories));
	context.subscriptions.push(vscode.commands.registerCommand('goto-code.openStyles', openStyles));
	context.subscriptions.push(vscode.commands.registerCommand('goto-code.openTests', openTests));

	context.subscriptions.push(outputChannel);
}

export function deactivate() {}
