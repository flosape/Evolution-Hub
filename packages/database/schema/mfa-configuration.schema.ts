/**
 * ==========================================================
 * Evolution Hub Operating System
 * MFA Configuration ORM Schema
 *
 * Foundation Milestone 011.3.6
 *
 * Engineering Law No. 1
 * Every schema has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Additional authentication factors strengthen trust.
 *
 * Engineering Law No. 37
 * Sensitive authentication data remains protected.
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * MFA Configuration ORM Schema
 * ----------------------------------------------------------
 */

export interface MFAConfigurationSchema {

  id: string;

  evolutionId: string;

  memberId: string;

  isEnabled: boolean;

  secretHash: string;

  recoveryCodeVersion: number;

  createdAt: Date;

  updatedAt: Date;

  enabledAt?: Date;

  disabledAt?: Date;
}
