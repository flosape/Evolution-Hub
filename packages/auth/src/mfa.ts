/**
 * ==========================================================
 * Evolution Hub Operating System
 * Multi-Factor Authentication Engine Contract
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
  MFAStatus,
} from "./types";

/**
 * ----------------------------------------------------------
 * MFA Methods
 * ----------------------------------------------------------
 */

export enum MFAMethod {
  AUTHENTICATOR_APP = "AUTHENTICATOR_APP",
  EMAIL = "EMAIL",
  SMS = "SMS",
  PASSKEY = "PASSKEY",
  BACKUP_CODES = "BACKUP_CODES",
}

/**
 * ----------------------------------------------------------
 * MFA Challenge
 * ----------------------------------------------------------
 */

export interface MFAChallenge {
  challengeId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  sessionId: string;

  deviceId: string;

  method: MFAMethod;

  createdAt: Date;

  expiresAt: Date;
}

/**
 * ----------------------------------------------------------
 * MFA Verification Result
 * ----------------------------------------------------------
 */

export interface MFAVerificationResult {
  success: boolean;

  status: MFAStatus;
}

/**
 * ----------------------------------------------------------
 * Backup Recovery Code
 * ----------------------------------------------------------
 */

export interface BackupRecoveryCode {
  code: string;

  used: boolean;

  usedAt?: Date;
}

/**
 * ----------------------------------------------------------
 * MFA Audit
 * ----------------------------------------------------------
 */

export interface MFAAuditEvent {
  evolutionId: EvolutionID;

  memberId: MemberID;

  event:
    | "MFA_ENABLED"
    | "MFA_DISABLED"
    | "MFA_CHALLENGE_CREATED"
    | "MFA_VERIFIED"
    | "BACKUP_CODE_USED";

  timestamp: Date;

  ipAddress?: string;

  userAgent?: string;
}

/**
 * ----------------------------------------------------------
 * MFA Service Contract
 * ----------------------------------------------------------
 */

export interface MFAService {

  enableMFA(
    evolutionId: EvolutionID,
    method: MFAMethod
  ): Promise<void>;

  disableMFA(
    evolutionId: EvolutionID
  ): Promise<void>;

  createChallenge(
    challenge: MFAChallenge
  ): Promise<void>;

  verifyChallenge(
    challengeId: string,
    code: string
  ): Promise<MFAVerificationResult>;

  generateBackupCodes(
    evolutionId: EvolutionID
  ): Promise<BackupRecoveryCode[]>;

  revokeBackupCodes(
    evolutionId: EvolutionID
  ): Promise<void>;
}
