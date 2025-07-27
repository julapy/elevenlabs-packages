import { BaseConversation, type PartialOptions } from "./BaseConversation";
import { TextConversation } from "./TextConversation";
import { VoiceConversation } from "./VoiceConversation";

// Export base conversation types and utilities
export type { Mode, Role, Options, PartialOptions, ClientToolsConfig, Callbacks, Status } from "./BaseConversation";
export { BaseConversation } from "./BaseConversation";

// Export input/audio utilities
export type { InputConfig } from "./utils/input";
export { Input } from "./utils/input";
export { Output } from "./utils/output";
export { arrayBufferToBase64, base64ToArrayBuffer } from "./utils/audio";

// Export event types for proxy reuse
export type {
  IncomingSocketEvent,
  OutgoingSocketEvent,
  AgentAudioEvent,
  AgentResponseEvent,
  UserTranscriptionEvent,
  InterruptionEvent,
  ClientToolCallEvent,
  ConfigEvent,
} from "./utils/events";

// Export connection utilities for proxy reuse
export type {
  SessionConfig,
  BaseSessionConfig,
  DisconnectionDetails,
  Language,
  ConnectionType,
  FormatConfig,
  OnDisconnectCallback,
  OnMessageCallback,
} from "./utils/BaseConnection";
export { parseFormat } from "./utils/BaseConnection";

// Export connection factories and implementations
export { createConnection } from "./utils/ConnectionFactory";
export { WebSocketConnection } from "./utils/WebSocketConnection";
export { WebRTCConnection } from "./utils/WebRTCConnection";

// Export other utilities
export { postOverallFeedback } from "./utils/postOverallFeedback";

export class Conversation extends BaseConversation {
  public static startSession(options: PartialOptions): Promise<Conversation> {
    return options.textOnly ? TextConversation.startSession(options) : VoiceConversation.startSession(options);
  }
}
