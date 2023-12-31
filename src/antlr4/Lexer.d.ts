import {Recognizer} from "./Recognizer";
import {LexerATNSimulator} from "./atn";
import {CharStream} from "./CharStream";
import {Token} from "./Token";
import {ProxyErrorListener} from './error/ProxyErrorListener';

export declare class Lexer extends Recognizer<number> {

    static DEFAULT_MODE: number;

    _input: CharStream;
    _interp: LexerATNSimulator;
    text: string;
    line: number;
    column: number;
    _tokenStartCharIndex: number;
    _tokenStartLine: number;
    _tokenStartColumn: number;
    _type: number;
    _modeStack: number[];
    _mode: number;

    constructor(input: CharStream);
    reset(): void;
    nextToken(): Token;
    skip(): void;
    more(): void;
    more(m: number): void;
    mode(m: number): void;
    pushMode(m: number): void;
    popMode(): number;
    emitToken(token: Token): void;
    emit(): Token;
    emitEOF(): Token;
    getAllTokens(): Token[];
    getErrorListenerDispatch(): ProxyErrorListener<any>;
}
