export type ExtensionConfig = {
	testPaths: string[];
	storyPaths: string[];
	stylePaths: string[];
};

export type Context = {
	activeEditorPath: string | undefined;
	workspaceFolders: string[];
	config: ExtensionConfig;
};
