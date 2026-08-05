/**
 * ==========================================================
 * Evolution Hub Operating System
 * Password ORM Schema
 *
 * Foundation Milestone 011.3.2
 *
 * Engineering Law No. 1
 * Every schema has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Passwords are never stored in plaintext.
 *
 * Engineering Law No. 37
 * Sensitive data shall remain protected.
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * Password ORM Schema
 * ----------------------------------------------------------
 */

export interface PasswordSchema {

  id: string;

  evolutionId: string;

  passwordHash: string;

  algorithm: string;

  passwordVersion: number;

  createdAt: Date;

  updatedAt: Date;

  lastChangedAt: Date;
}
