/**
 * ==========================================================
 * Evolution Hub Operating System
 * Backup Recovery Code ORM Schema
 *
 * Foundation Milestone 011.3.7
 *
 * Engineering Law No. 1
 * Every schema has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Recovery codes are independently verified.
 *
 * Engineering Law No. 37
 * Recovery codes remain protected.
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * Backup Recovery Code ORM Schema
 * ----------------------------------------------------------
 */

export interface BackupRecoveryCodeSchema {

  id: string;

  evolutionId: string;

  memberId: string;

  codeHash: string;

  isUsed: boolean;

  createdAt: Date;

  usedAt?: Date;
}
