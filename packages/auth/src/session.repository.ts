/**
 * ==========================================================
 * Evolution Hub Operating System
 * Session Repository Contract
 *
 * Engineering Law No. 1
 * Every component has exactly one responsibility.
 *
 * Engineering Law No. 7
 * Contracts are approved before implementation.
 *
 * Engineering Law No. 13
 * Dependencies flow toward infrastructure.
 * ==========================================================
 */

import type {
  EvolutionID,
} from "./types";

import type {
  ActiveSession,
} from "./session";

/**
 * ----------------------------------------------------------
 * Session Repository Contract
 * ----------------------------------------------------------
 */

export interface SessionRepository {

  saveSession(
    session: ActiveSession
  ): Promise<void>;

  getSession(
    sessionId: string
  ): Promise<ActiveSession | null>;

  getActiveSessions(
    evolutionId: EvolutionID
  ): Promise<ActiveSession[]>;

  updateLastActivity(
    sessionId: string,
    lastActivityAt: Date
  ): Promise<void>;

  revokeSession(
    sessionId: string
  ): Promise<void>;

  revokeAllSessions(
    evolutionId: EvolutionID
  ): Promise<void>;

  expireSession(
    sessionId: string
  ): Promise<void>;

  deleteExpiredSessions(): Promise<void>;
}
