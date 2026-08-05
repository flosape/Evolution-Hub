/**
 * ==========================================================
 * Evolution Hub Operating System
 * Session Entity Contract
 *
 * Foundation Milestone 010.3
 *
 * Engineering Law No. 1
 * Every entity has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Every authenticated session must be trusted.
 *
 * Engineering Law No. 33
 * Every active session must remain observable.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
  OrganizationID,
  WorkspaceID,
} from "./types";

import type {
  SessionStatus,
} from "./session";

/**
 * ----------------------------------------------------------
 * Session Entity
 * ----------------------------------------------------------
 */

export interface SessionEntity {

  sessionId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  organizationId: OrganizationID;

  workspaceId: WorkspaceID;

  deviceId: string;

  status: SessionStatus;

  loginAt: Date;

  lastActivityAt: Date;

  expiresAt: Date;

  revokedAt?: Date;
}
