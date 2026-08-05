/**
 * ==========================================================
 * Evolution Hub Operating System
 * Password Recovery Token ORM Schema
 *
 * Foundation Milestone 011.3.8
 *
 * Engineering Law No. 1
 * Every schema has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Recovery tokens are independently verified.
 *
 * Engineering Law No. 37
 * Security-sensitive data remains protected.
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * Password Recovery Token ORM Schema
 * ----------------------------------------------------------
 */

export interface PasswordRecoveryTokenSchema {

  id: string;

  evolutionId: string;

  memberId: string;

  tokenHash: string;

  createdAt: Date;

  expiresAt: Date;

  consumedAt?: Date;

  revokedAt?: Date;
}
