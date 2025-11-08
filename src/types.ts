export type ExtensionConfig = {
	storyPaths: string[];
	stylePaths: string[];
	testPaths: string[];

	sourceNameCase: "pascal" | "kebab" | (string & {}) | undefined;
	storyNameCase: "pascal" | "kebab" | (string & {}) | undefined;
	styleNameCase: "pascal" | "kebab" | (string & {}) | undefined;
	testNameCase: "pascal" | "kebab" | (string & {}) | undefined;
};

export type Context = {
	activeEditorPath: string | undefined;
	workspaceFolders: string[];
	config: ExtensionConfig;
};
