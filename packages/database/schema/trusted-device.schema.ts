/**
 * ==========================================================
 * Evolution Hub Operating System
 * Trusted Device ORM Schema
 *
 * Foundation Milestone 011.3.5
 *
 * Engineering Law No. 1
 * Every schema has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Device trust is earned, never assumed.
 *
 * Engineering Law No. 33
 * Device trust lifecycle remains observable.
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * Trusted Device ORM Schema
 * ----------------------------------------------------------
 */

export interface TrustedDeviceSchema {

  id: string;

  evolutionId: string;

  memberId: string;

  deviceFingerprint: string;

  deviceName?: string;

  platform: string;

  trustedAt: Date;

  lastSeenAt: Date;

  revokedAt?: Date;
}
