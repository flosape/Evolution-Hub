/**
 * ==========================================================
 * Evolution Hub Operating System
 * Authentication Audit ORM Schema
 *
 * Foundation Milestone 011.3.9
 *
 * Engineering Law No. 1
 * Every schema has exactly one responsibility.
 *
 * Engineering Law No. 33
 * Security events remain observable.
 *
 * Engineering Law No. 48
 * Every security event is accountable.
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * Authentication Audit ORM Schema
 * ----------------------------------------------------------
 */

export interface AuthenticationAuditSchema {

  id: string;

  evolutionId: string;

  memberId?: string;

  eventType: string;

  eventStatus: string;

  ipAddress?: string;

  userAgent?: string;

  occurredAt: Date;

  metadata?: string;
}
