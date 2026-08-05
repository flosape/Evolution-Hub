/**
 * ==========================================================
 * Evolution Hub Operating System
 * Authentication Audit Repository Contract
 *
 * Engineering Law No. 1
 * Every component has exactly one responsibility.
 *
 * Engineering Law No. 7
 * Contracts are approved before implementation.
 *
 * Engineering Law No. 13
 * Dependencies flow toward infrastructure.
 *
 * Engineering Law No. 33
 * Every critical capability shall be observable,
 * measurable and auditable.
 *
 * Engineering Law No. 48
 * Intelligent operations remain traceable.
 * ==========================================================
 */

import type {
  EvolutionID,
} from "./types";

import type {
  PasswordAuditEvent,
} from "./password";

import type {
  SessionAuditEvent,
} from "./session";

import type {
  DeviceAuditEvent,
} from "./device";

import type {
  MFAAuditEvent,
} from "./mfa";

import type {
  RecoveryAuditEvent,
} from "./recovery";

/**
 * ----------------------------------------------------------
 * Authentication Audit Union
 * ----------------------------------------------------------
 */

export type AuthenticationAuditEvent =
  | PasswordAuditEvent
  | SessionAuditEvent
  | DeviceAuditEvent
  | MFAAuditEvent
  | RecoveryAuditEvent;

/**
 * ----------------------------------------------------------
 * Authentication Audit Repository Contract
 * ----------------------------------------------------------
 */

export interface AuthenticationAuditRepository {

  saveAuditEvent(
    event: AuthenticationAuditEvent
  ): Promise<void>;

  getAuditEvent(
    eventId: string
  ): Promise<AuthenticationAuditEvent | null>;

  getMemberAuditHistory(
    evolutionId: EvolutionID
  ): Promise<AuthenticationAuditEvent[]>;

  getSessionAuditHistory(
    sessionId: string
  ): Promise<AuthenticationAuditEvent[]>;

  getDeviceAuditHistory(
    deviceId: string
  ): Promise<AuthenticationAuditEvent[]>;

  getAuditEventsByType(
    eventType: string
  ): Promise<AuthenticationAuditEvent[]>;

  archiveAuditEvents(
    before: Date
  ): Promise<void>;
}
