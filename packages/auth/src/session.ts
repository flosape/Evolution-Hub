/**
 * ==========================================================
 * Evolution Hub Operating System
 * Session Engine Contract
 *
 * Engineering Law No. 26
 * Security begins when identity can be trusted.
 *
 * Engineering Law No. 27
 * No foundational module shall be implemented before
 * its contract is reviewed, verified and frozen.
 *
 * Engineering Law No. 28
 * JWT proves identity.
 * Authorization proves permission.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
  OrganizationID,
  WorkspaceID,
} from "./types";

/**
 * ----------------------------------------------------------
 * Session Status
 * ----------------------------------------------------------
 */

export enum SessionStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  REVOKED = "REVOKED",
  LOGGED_OUT = "LOGGED_OUT",
  LOCKED = "LOCKED",
}

/**
 * ----------------------------------------------------------
 * Session Identity
 * ----------------------------------------------------------
 */

export interface SessionIdentity {
  sessionId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  organizationId: OrganizationID;

  workspaceId: WorkspaceID;
}

/**
 * ----------------------------------------------------------
 * Device Association
 * ----------------------------------------------------------
 */

export interface SessionDevice {
  deviceId: string;

  ipAddress?: string;

  userAgent?: string;
}

/**
 * ----------------------------------------------------------
 * Active Session
 * ----------------------------------------------------------
 */

export interface ActiveSession {
  identity: SessionIdentity;

  device: SessionDevice;

  status: SessionStatus;

  loginAt: Date;

  lastActivityAt: Date;

  expiresAt: Date;
}

/**
 * ----------------------------------------------------------
 * Session Audit
 * ----------------------------------------------------------
 */

export interface SessionAuditEvent {
  sessionId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  event:
    | "SESSION_CREATED"
    | "SESSION_REFRESHED"
    | "SESSION_REVOKED"
    | "SESSION_EXPIRED"
    | "SESSION_LOGGED_OUT"
    | "SESSION_LOGGED_OUT_ALL";

  timestamp: Date;

  ipAddress?: string;

  userAgent?: string;
}

/**
 * ----------------------------------------------------------
 * Session Service Contract
 * ----------------------------------------------------------
 */

export interface SessionService {

  createSession(
    session: ActiveSession
  ): Promise<void>;

  getSession(
    sessionId: string
  ): Promise<ActiveSession | null>;

  updateActivity(
    sessionId: string
  ): Promise<void>;

  revokeSession(
    sessionId: string
  ): Promise<void>;

  revokeAllSessions(
    evolutionId: EvolutionID
  ): Promise<void>;

  getActiveSessions(
    evolutionId: EvolutionID
  ): Promise<ActiveSession[]>;

  expireSession(
    sessionId: string
  ): Promise<void>;
}
