/**
 * ==========================================================
 * Evolution Hub Operating System
 * Password Repository Contract
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
  MemberID,
} from "./types";

import type {
  PasswordHash,
  PasswordHistoryEntry,
} from "./password";

/**
 * ----------------------------------------------------------
 * Password Record
 * ----------------------------------------------------------
 */

export interface PasswordRecord {
  evolutionId: EvolutionID;

  memberId: MemberID;

  password: PasswordHash;
}

/**
 * ----------------------------------------------------------
 * Password Repository Contract
 * ----------------------------------------------------------
 */

export interface PasswordRepository {

  savePassword(
    record: PasswordRecord
  ): Promise<void>;

  getCurrentPassword(
    evolutionId: EvolutionID
  ): Promise<PasswordHash | null>;

  updatePassword(
    evolutionId: EvolutionID,
    password: PasswordHash
  ): Promise<void>;

  storePasswordHistory(
    entry: PasswordHistoryEntry
  ): Promise<void>;

  getPasswordHistory(
    evolutionId: EvolutionID
  ): Promise<PasswordHistoryEntry[]>;

  passwordExists(
    evolutionId: EvolutionID
  ): Promise<boolean>;

  deletePassword(
    evolutionId: EvolutionID
  ): Promise<void>;
}
