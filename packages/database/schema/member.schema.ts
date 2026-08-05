/**
 * ==========================================================
 * Evolution Hub Operating System
 * Member ORM Schema
 *
 * Foundation Milestone 011.3.1
 *
 * Engineering Law No. 1
 * Every schema has exactly one responsibility.
 *
 * Engineering Law No. 7
 * Schema follows approved contracts.
 *
 * Engineering Law No. 26
 * Universal identity is the platform foundation.
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * Member ORM Schema
 * ----------------------------------------------------------
 */

export interface MemberSchema {

  id: string;

  evolutionId: string;

  email: string;

  username?: string;

  displayName: string;

  isActive: boolean;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date;
}
