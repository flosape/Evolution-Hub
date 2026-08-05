/**
 * ==========================================================
 * Evolution Hub Operating System
 * Refresh Token ORM Schema
 *
 * Foundation Milestone 011.3.4
 *
 * Engineering Law No. 1
 * Every schema has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Every refresh token is independently trusted.
 *
 * Engineering Law No. 33
 * Token lifecycle remains observable.
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * Refresh Token ORM Schema
 * ----------------------------------------------------------
 */

export interface RefreshTokenSchema {

  id: string;

  evolutionId: string;

  memberId: string;

  sessionId: string;

  tokenHash: string;

  createdAt: Date;

  expiresAt: Date;

  rotatedAt?: Date;

  revokedAt?: Date;
}
