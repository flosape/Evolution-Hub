/**
 * ==========================================================
 * Evolution Hub Operating System
 * MFA Repository Contract
 *
 * Engineering Law No. 1
 * Every component has exactly one responsibility.
 *
 * Engineering Law No. 7
 * Contracts are approved before implementation.
 *
 * Engineering Law No. 13
 * Dependencies flow toward infrastructure.
 * ==========================================================
 */

import type {
  EvolutionID,
} from "./types";

import type {
  BackupRecoveryCode,
  MFAMethod,
} from "./mfa";

/**
 * ----------------------------------------------------------
 * MFA Configuration
 * ----------------------------------------------------------
 */

export interface MFAConfiguration {
  evolutionId: EvolutionID;

  enabled: boolean;

  method: MFAMethod;

  secret: string;

  enabledAt: Date;
}

/**
 * ----------------------------------------------------------
 * MFA Repository Contract
 * ----------------------------------------------------------
 */

export interface MFARepository {

  saveConfiguration(
    configuration: MFAConfiguration
  ): Promise<void>;

  getConfiguration(
    evolutionId: EvolutionID
  ): Promise<MFAConfiguration | null>;

  enableMFA(
    evolutionId: EvolutionID
  ): Promise<void>;

  disableMFA(
    evolutionId: EvolutionID
  ): Promise<void>;

  saveBackupCodes(
    evolutionId: EvolutionID,
    codes: BackupRecoveryCode[]
  ): Promise<void>;

  getBackupCodes(
    evolutionId: EvolutionID
  ): Promise<BackupRecoveryCode[]>;

  markBackupCodeUsed(
    evolutionId: EvolutionID,
    code: string
  ): Promise<void>;

  deleteConfiguration(
    evolutionId: EvolutionID
  ): Promise<void>;
}
