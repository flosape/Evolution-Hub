/**
 * ==========================================================
 * Evolution Hub Operating System
 * Backup Recovery Code Entity Contract
 *
 * Foundation Milestone 010.7
 *
 * Engineering Law No. 1
 * Every entity has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Recovery mechanisms must remain trusted.
 *
 * Engineering Law No. 37
 * Sensitive recovery data shall remain protected.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
} from "./types";

/**
 * ----------------------------------------------------------
 * Backup Recovery Code Entity
 * ----------------------------------------------------------
 */

export interface BackupRecoveryCodeEntity {

  recoveryCodeId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  codeHash: string;

  used: boolean;

  createdAt: Date;

  usedAt?: Date;

  revokedAt?: Date;
}
