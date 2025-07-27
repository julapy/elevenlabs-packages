import { BaseConversation, type PartialOptions } from "./BaseConversation";
import { TextConversation } from "./TextConversation";
import { VoiceConversation } from "./VoiceConversation";

export type {
  Mode,
  Role,
  Options,
  PartialOptions,
  ClientToolsConfig,
  Callbacks,
  Status,
} from "./BaseConversation";
export type { InputConfig } from "./utils/input";
export type { IncomingSocketEvent } from "./utils/events";
export type {
  SessionConfig,
  BaseSessionConfig,
  DisconnectionDetails,
  Language,
  ConnectionType,
} from "./utils/BaseConnection";
export { createConnection } from "./utils/ConnectionFactory";
export { WebSocketConnection } from "./utils/WebSocketConnection";
export { WebRTCConnection } from "./utils/WebRTCConnection";
export { postOverallFeedback } from "./utils/postOverallFeedback";

// Export audio utilities for proxy reuse
export { Input } from "./utils/input";
export { Output } from "./utils/output";
export { arrayBufferToBase64, base64ToArrayBuffer } from "./utils/audio";

export class Conversation extends BaseConversation {
  public static startSession(options: PartialOptions): Promise<Conversation> {
    return options.textOnly
      ? TextConversation.startSession(options)
      : VoiceConversation.startSession(options);
  }
}
