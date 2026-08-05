/**
 * ==========================================================
 * Evolution Hub Operating System
 * Refresh Token Entity Contract
 *
 * Foundation Milestone 010.4
 *
 * Engineering Law No. 1
 * Every entity has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Every refresh request must be trusted.
 *
 * Engineering Law No. 38
 * Security must support token rotation and recovery.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
} from "./types";

/**
 * ----------------------------------------------------------
 * Refresh Token Status
 * ----------------------------------------------------------
 */

export enum RefreshTokenStatus {
  ACTIVE = "ACTIVE",
  ROTATED = "ROTATED",
  REVOKED = "REVOKED",
  EXPIRED = "EXPIRED",
}

/**
 * ----------------------------------------------------------
 * Refresh Token Entity
 * ----------------------------------------------------------
 */

export interface RefreshTokenEntity {

  tokenId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  tokenHash: string;

  status: RefreshTokenStatus;

  issuedAt: Date;

  expiresAt: Date;

  rotatedAt?: Date;

  revokedAt?: Date;
}
