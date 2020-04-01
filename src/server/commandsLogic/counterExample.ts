"use strict";
import * as vscode from "vscode";
import { LanguageClient, ResponseError } from "vscode-languageclient";

import { DafnyUiManager } from "../../ui/dafnyUiManager";
import { LanguageServerRequest } from "../../stringRessources/languageServer";
import { Error } from "../../stringRessources/messages";
import { ICounterExamples } from "../../typeInterfaces/ICounterExampleResult";
import { ICounterExampleArguments } from "../../typeInterfaces/ICounterExampleArguments";

/*
* Provides Counter Example provided by the Dafny language server. 
*/
export class CounterExample {
    static showCounterExample(languageServer: LanguageClient, provider: DafnyUiManager) {
        if (!vscode.window.activeTextEditor) {
            return;
        }
        vscode.window.activeTextEditor.document.save();
        
        const arg: ICounterExampleArguments = { 
            DafnyFile: vscode.window.activeTextEditor.document.fileName 
        };

        languageServer.sendRequest<ICounterExamples>(LanguageServerRequest.CounterExample, arg)
            .then((allCounterExamples: ICounterExamples) => {
                provider.getCounterModelProvider().showCounterModel(allCounterExamples);
            }, (error: ResponseError<void>) => {
                vscode.window.showErrorMessage(`${Error.CanNotGetCounterExample}: ${error.message}`);
            })
    }

    static hideCounterExample(provider: DafnyUiManager) {
        provider.getCounterModelProvider().hideCounterModel()
    }
}