import {CharStream} from "./CharStream";

export declare class Token {

    static INVALID_TYPE: number;

    /**
     * During lookahead operations, this "token" signifies we hit rule end ATN state
     * and did not follow it despite needing to.
     */
    static EPSILON: number;

    static MIN_USER_TOKEN_TYPE: number;

    static EOF: number;

    /**
     * All tokens go to the parser (unless skip() is called in that rule)
     * on a particular "channel". The parser tunes to a particular channel
     * so that whitespace etc... can go to the parser on a "hidden" channel.
     */
    static DEFAULT_CHANNEL: number;

    /**
     * Anything on different channel than DEFAULT_CHANNEL is not parsed
     * by parser.
     */
    static HIDDEN_CHANNEL: number;

    tokenIndex: number;
    line: number;
    column: number;
    channel: number;
    text: string;
    type: number;
    start : number;
    stop: number;

    clone(): Token;
    cloneWithType(type: number): Token;
    getInputStream(): CharStream;
}
