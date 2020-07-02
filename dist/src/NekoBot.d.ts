import request from "superagent";
import { ImageEndpoint } from "./ImageEndpoint";
import { ImageGeneration } from "./ImageGeneration";
declare class NekoBot {
    version: String;
    baseURL: String;
    token?: String;
    request: request.SuperAgentStatic;
    /**
     * Creates an instance of NekoBot.
     * @class NekoBot
     * @param {String} [token]
     */
    constructor(token?: String);
    /**
     * @readonly
     * @returns {ImageGeneration} ImageGeneration class
     */
    get imageGen(): ImageGeneration;
    /**
     * @readonly
     * @returns {ImageEndpoint} ImageEndpoint class
     */
    get imageEndpoint(): ImageEndpoint;
}
export { NekoBot };
