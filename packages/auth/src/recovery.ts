/**
 * ==========================================================
 * Evolution Hub Operating System
 * Recovery Engine Contract
 *
 * Engineering Law No. 26
 * Security begins when identity can be trusted.
 *
 * Engineering Law No. 27
 * No foundational module shall be implemented before
 * its contract is reviewed, verified and frozen.
 *
 * Engineering Law No. 28
 * JWT proves identity.
 * Authorization proves permission.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
} from "./types";

/**
 * ----------------------------------------------------------
 * Recovery Token Status
 * ----------------------------------------------------------
 */

export enum RecoveryTokenStatus {
  ACTIVE = "ACTIVE",
  USED = "USED",
  EXPIRED = "EXPIRED",
  REVOKED = "REVOKED",
}

/**
 * ----------------------------------------------------------
 * Recovery Policy
 * ----------------------------------------------------------
 */

export interface RecoveryPolicy {
  tokenExpiryMinutes: number;

  singleUse: boolean;

  maxRecoveryRequestsPerHour: number;

  preventPasswordReuse: boolean;
}

/**
 * ----------------------------------------------------------
 * Password Recovery Request
 * ----------------------------------------------------------
 */

export interface RecoveryRequest {
  email: string;
}

/**
 * ----------------------------------------------------------
 * Recovery Token
 * ----------------------------------------------------------
 */

export interface RecoveryToken {
  tokenId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  token: string;

  status: RecoveryTokenStatus;

  createdAt: Date;

  expiresAt: Date;

  usedAt?: Date;
}

/**
 * ----------------------------------------------------------
 * Password Reset Request
 * ----------------------------------------------------------
 */

export interface PasswordResetRequest {
  token: string;

  newPassword: string;

  confirmPassword: string;
}

/**
 * ----------------------------------------------------------
 * Recovery Result
 * ----------------------------------------------------------
 */

export interface RecoveryResult {
  success: boolean;

  message: string;
}

/**
 * ----------------------------------------------------------
 * Recovery Audit
 * ----------------------------------------------------------
 */

export interface RecoveryAuditEvent {
  evolutionId: EvolutionID;

  memberId: MemberID;

  event:
    | "RECOVERY_REQUESTED"
    | "RECOVERY_TOKEN_CREATED"
    | "RECOVERY_TOKEN_USED"
    | "PASSWORD_RESET_COMPLETED"
    | "RECOVERY_TOKEN_REVOKED";

  timestamp: Date;

  ipAddress?: string;

  userAgent?: string;
}

/**
 * ----------------------------------------------------------
 * Recovery Service Contract
 * ----------------------------------------------------------
 */

export interface RecoveryService {

  requestRecovery(
    request: RecoveryRequest
  ): Promise<void>;

  createRecoveryToken(
    evolutionId: EvolutionID,
    memberId: MemberID
  ): Promise<RecoveryToken>;

  validateRecoveryToken(
    token: string
  ): Promise<RecoveryToken | null>;

  resetPassword(
    request: PasswordResetRequest
  ): Promise<RecoveryResult>;

  revokeRecoveryToken(
    tokenId: string
  ): Promise<void>;

  getRecoveryPolicy(): RecoveryPolicy;
}
