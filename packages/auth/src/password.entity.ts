/**
 * ==========================================================
 * Evolution Hub Operating System
 * Password Entity Contract
 *
 * Foundation Milestone 010.2
 *
 * Engineering Law No. 1
 * Every entity has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Every authentication request begins with trust
 * verification.
 *
 * Engineering Law No. 37
 * Sensitive information shall remain protected
 * throughout its lifecycle.
 * ==========================================================
 */

import type {
  MemberID,
  EvolutionID,
} from "./types";

/**
 * ----------------------------------------------------------
 * Password Algorithm
 * ----------------------------------------------------------
 */

export enum PasswordAlgorithm {
  ARGON2ID = "ARGON2ID",
  BCRYPT = "BCRYPT",
}

/**
 * ----------------------------------------------------------
 * Password Entity
 * ----------------------------------------------------------
 */

export interface PasswordEntity {

  passwordId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  passwordHash: string;

  algorithm: PasswordAlgorithm;

  version: number;

  createdAt: Date;

  updatedAt: Date;

  expiresAt?: Date;

  passwordHistoryVersion: number;
}
