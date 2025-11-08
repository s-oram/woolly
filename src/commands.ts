import * as vscode from 'vscode';

const getWorkspaceFolders = () => {
  const folders = vscode.workspace.workspaceFolders || [];
  return folders.map(folder => folder.uri.fsPath);
};

export const openSource = (outputChannel: vscode.OutputChannel) => () => {
  outputChannel.appendLine('hello world');
  outputChannel.show(true);
  console.info('Extension "goto-code" is now active');

  const folders = getWorkspaceFolders();
  console.log('::: folders', folders);
  vscode.window.showInformationMessage('openSource');
};

export const openStories = () => {
  vscode.window.showInformationMessage('openStories');
};


export const openStyles = () => {
  vscode.window.showInformationMessage('openStyles');
};

export const openTests = () => {
  vscode.window.showInformationMessage('openTests');
};