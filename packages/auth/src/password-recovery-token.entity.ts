/**
 * ==========================================================
 * Evolution Hub Operating System
 * Password Recovery Token Entity Contract
 *
 * Foundation Milestone 010.8
 *
 * Engineering Law No. 1
 * Every entity has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Recovery tokens must be individually trusted.
 *
 * Engineering Law No. 37
 * Sensitive recovery information shall remain protected.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
} from "./types";

/**
 * ----------------------------------------------------------
 * Password Recovery Token Status
 * ----------------------------------------------------------
 */

export enum PasswordRecoveryTokenStatus {
  ACTIVE = "ACTIVE",
  USED = "USED",
  EXPIRED = "EXPIRED",
  REVOKED = "REVOKED",
}

/**
 * ----------------------------------------------------------
 * Password Recovery Token Entity
 * ----------------------------------------------------------
 */

export interface PasswordRecoveryTokenEntity {

  tokenId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  tokenHash: string;

  status: PasswordRecoveryTokenStatus;

  createdAt: Date;

  expiresAt: Date;

  usedAt?: Date;

  revokedAt?: Date;
}
