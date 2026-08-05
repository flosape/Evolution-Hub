/**
 * ==========================================================
 * Evolution Hub Operating System
 * Session ORM Schema
 *
 * Foundation Milestone 011.3.3
 *
 * Engineering Law No. 1
 * Every schema has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Every session is independently trusted.
 *
 * Engineering Law No. 33
 * Authentication activity remains observable.
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * Session ORM Schema
 * ----------------------------------------------------------
 */

export interface SessionSchema {

  id: string;

  evolutionId: string;

  memberId: string;

  refreshTokenId: string;

  deviceId?: string;

  createdAt: Date;

  expiresAt: Date;

  lastActivityAt: Date;

  revokedAt?: Date;
}
