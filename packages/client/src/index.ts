import { BaseConversation, type PartialOptions } from "./BaseConversation";
import { TextConversation } from "./TextConversation";
import { VoiceConversation } from "./VoiceConversation";

// Export base conversation types and utilities
export type { Mode, Role, Options, PartialOptions, ClientToolsConfig, Callbacks, Status } from "./BaseConversation";
export { BaseConversation } from "./BaseConversation";
export { VoiceConversation } from "./VoiceConversation";

// Export input/audio utilities
export type { InputConfig } from "./utils/input";
export { Input } from "./utils/input";
export { Output } from "./utils/output";
export { arrayBufferToBase64, base64ToArrayBuffer } from "./utils/audio";
export { applyDelay } from "./utils/applyDelay";

export type {
  // incoming events
  IncomingSocketEvent,
  UserTranscriptionEvent,
  AgentResponseEvent,
  AgentAudioEvent,
  InterruptionEvent,
  InternalTentativeAgentResponseEvent,
  ConfigEvent,
  PingEvent,
  ClientToolCallEvent,
  // outgoing events
  OutgoingSocketEvent,
  PongEvent,
  UserAudioEvent,
  InitiationClientDataEvent,
  UserFeedbackEvent,
  ClientToolResultEvent,
  ContextualUpdateEvent,
  UserMessageEvent,
  UserActivityEvent,
  MCPToolApprovalResultEvent,
} from "./utils/events";

export type {
  SessionConfig,
  BaseSessionConfig,
  PrivateWebSocketSessionConfig,
  DisconnectionDetails,
  Language,
  ConnectionType,
  FormatConfig,
  OnDisconnectCallback,
  OnMessageCallback,
} from "./utils/BaseConnection";
export { parseFormat } from "./utils/BaseConnection";
export { BaseConnection } from "./utils/BaseConnection";

// Export connection factories and implementations
export { createConnection } from "./utils/ConnectionFactory";
export { WebSocketConnection } from "./utils/WebSocketConnection";
export { WebRTCConnection } from "./utils/WebRTCConnection";

export { postOverallFeedback } from "./utils/postOverallFeedback";

// Export server utilities for proxy reuse
export { constructOverrides } from "./utils/overrides";
export { isValidSocketEvent } from "./utils/events";
export { PACKAGE_VERSION } from "./version";

export class Conversation extends BaseConversation {
  public static startSession(options: PartialOptions): Promise<Conversation> {
    return options.textOnly ? TextConversation.startSession(options) : VoiceConversation.startSession(options);
  }
}
