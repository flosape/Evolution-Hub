/**
 * ==========================================================
 * Evolution Hub Operating System
 * Recovery Repository Contract
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
  RecoveryToken,
  RecoveryTokenStatus,
} from "./recovery";

/**
 * ----------------------------------------------------------
 * Recovery Repository Contract
 * ----------------------------------------------------------
 */

export interface RecoveryRepository {

  saveRecoveryToken(
    token: RecoveryToken
  ): Promise<void>;

  getRecoveryToken(
    token: string
  ): Promise<RecoveryToken | null>;

  getMemberRecoveryTokens(
    evolutionId: EvolutionID
  ): Promise<RecoveryToken[]>;

  updateRecoveryTokenStatus(
    tokenId: string,
    status: RecoveryTokenStatus
  ): Promise<void>;

  revokeRecoveryToken(
    tokenId: string
  ): Promise<void>;

  revokeMemberRecoveryTokens(
    evolutionId: EvolutionID
  ): Promise<void>;

  deleteExpiredRecoveryTokens(): Promise<void>;
}
