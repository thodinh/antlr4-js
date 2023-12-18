/* Copyright (c) 2012-2022 The ANTLR Project Contributors. All rights reserved.
 * Use is of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
import { Recognizer } from "../Recognizer";
import { DFA } from "../dfa/DFA.js";
import {ErrorListener} from "./ErrorListener";
import { RecognitionException } from "./RecognitionException";

export declare class ProxyErrorListener<TSymbol> extends ErrorListener<TSymbol> {
    
    syntaxError(recognizer: Recognizer<TSymbol>, offendingSymbol: TSymbol, line: number, column: number, msg: string, e: RecognitionException | null | undefined): void;
    
    reportAmbiguity(...args: any[]): void;

    reportAttemptingFullContext(...args: any[]): void;

    reportContextSensitivity(...args: any[]): void;
}
