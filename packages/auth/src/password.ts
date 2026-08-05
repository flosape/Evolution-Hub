/**
 * ==========================================================
 * Evolution Hub Operating System
 * Password Engine Contract
 *
 * Engineering Law No. 26
 * Security begins when identity can be trusted.
 *
 * Engineering Law No. 27
 * No foundational module shall be implemented before
 * its contract is reviewed, verified and frozen.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
} from "./types";

/**
 * ----------------------------------------------------------
 * Password Policy
 * ----------------------------------------------------------
 */

export interface PasswordPolicy {
  minimumLength: number;

  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumber: boolean;
  requireSpecialCharacter: boolean;

  allowNumericOnly: boolean;

  maxFailedAttempts: number;

  recoveryTokenExpiryMinutes: number;

  algorithm: "argon2id";

  passwordHistoryEnabled: boolean;

  preventPasswordReuse: boolean;

  recoveryTokenSingleUse: boolean;
}

/**
 * ----------------------------------------------------------
 * Password Validation
 * ----------------------------------------------------------
 */

export interface PasswordValidationResult {
  valid: boolean;

  errors: string[];
}

/**
 * ----------------------------------------------------------
 * Password Hash
 * ----------------------------------------------------------
 */

export interface PasswordHash {
  algorithm: "argon2id";

  hash: string;

  createdAt: Date;
}

/**
 * ----------------------------------------------------------
 * Password History
 * ----------------------------------------------------------
 */

export interface PasswordHistoryEntry {
  hash: PasswordHash;

  createdAt: Date;
}

/**
 * ----------------------------------------------------------
 * Password Verification
 * ----------------------------------------------------------
 */

export interface PasswordVerificationResult {
  success: boolean;

  requiresRehash: boolean;
}

/**
 * ----------------------------------------------------------
 * Password Recovery
 * ----------------------------------------------------------
 */

export interface PasswordRecoveryRequest {
  email: string;
}

export interface PasswordResetRequest {
  token: string;

  newPassword: string;

  confirmPassword: string;
}

/**
 * ----------------------------------------------------------
 * Password Audit
 * ----------------------------------------------------------
 */

export interface PasswordAuditEvent {
  evolutionId: EvolutionID;

  memberId: MemberID;

  event:
    | "PASSWORD_CREATED"
    | "PASSWORD_CHANGED"
    | "PASSWORD_RESET"
    | "PASSWORD_RECOVERY_REQUESTED";

  timestamp: Date;

  ipAddress?: string;

  userAgent?: string;
}

/**
 * ----------------------------------------------------------
 * Password Service Contract
 * ----------------------------------------------------------
 */

export interface PasswordService {
  getPasswordPolicy(): PasswordPolicy;

  validatePassword(
    password: string
  ): PasswordValidationResult;

  hashPassword(
    password: string
  ): Promise<PasswordHash>;

  verifyPassword(
    password: string,
    hash: PasswordHash
  ): Promise<PasswordVerificationResult>;

  requestPasswordRecovery(
    request: PasswordRecoveryRequest
  ): Promise<void>;

  resetPassword(
    request: PasswordResetRequest
  ): Promise<void>;
}
