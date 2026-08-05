/**
 * ==========================================================
 * Evolution Hub Operating System
 * Authentication Audit Entity Contract
 *
 * Foundation Milestone 010.9
 *
 * Engineering Law No. 1
 * Every entity has exactly one responsibility.
 *
 * Engineering Law No. 11
 * Security is a platform-wide service.
 *
 * Engineering Law No. 48
 * Every authentication action must remain accountable.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
} from "./types";

/**
 * ----------------------------------------------------------
 * Authentication Audit Event
 * ----------------------------------------------------------
 */

export enum AuthenticationAuditEventType {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT = "LOGOUT",
  PASSWORD_CHANGED = "PASSWORD_CHANGED",
  PASSWORD_RESET = "PASSWORD_RESET",
  MFA_ENABLED = "MFA_ENABLED",
  MFA_DISABLED = "MFA_DISABLED",
  MFA_VERIFIED = "MFA_VERIFIED",
  DEVICE_REGISTERED = "DEVICE_REGISTERED",
  DEVICE_REVOKED = "DEVICE_REVOKED",
  SESSION_REVOKED = "SESSION_REVOKED",
  REFRESH_TOKEN_ROTATED = "REFRESH_TOKEN_ROTATED",
}

/**
 * ----------------------------------------------------------
 * Authentication Audit Entity
 * ----------------------------------------------------------
 */

export interface AuthenticationAuditEntity {

  auditId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  event: AuthenticationAuditEventType;

  success: boolean;

  ipAddress?: string;

  userAgent?: string;

  deviceId?: string;

  occurredAt: Date;
}
