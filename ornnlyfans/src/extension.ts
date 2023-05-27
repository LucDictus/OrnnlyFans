// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('ornnlyfans.OrnnlyFans', () => {
		showWebView(context.extensionPath);
		
	});

	context.subscriptions.push(disposable);
}

function showWebView(extensionPath: string) {
	const panel = vscode.window.createWebviewPanel(
		'OrrnPanel',
		'Ornn',
		vscode.ViewColumn.Beside,
		{ enableScripts: true }
	);

	const ornnImage = 'https://img-9gag-fun.9cache.com/photo/aB2PK5P_460s.jpg';

	panel.webview.html = getWebviewContent(ornnImage);

}

function getWebviewContent(imageUrl: string): string {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
			<style>
				.ornnhub {
					width: 100%;
					height: 100vh;
				}
			</style>
		</head>
        <body>
            <img class='ornnhub' src='${imageUrl}' alt='ornnHub' />
        </body>
        </html>`
    ;
    return htmlContent;
}

// This method is called when your extension is deactivated
export function deactivate() {}
