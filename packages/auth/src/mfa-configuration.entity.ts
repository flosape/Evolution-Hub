/**
 * ==========================================================
 * Evolution Hub Operating System
 * MFA Configuration Entity Contract
 *
 * Foundation Milestone 010.6
 *
 * Engineering Law No. 1
 * Every entity has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Authentication remains incomplete until every
 * configured authentication factor is satisfied.
 *
 * Engineering Law No. 37
 * Sensitive authentication data shall remain protected.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
} from "./types";

import type {
  MFAMethod,
} from "./mfa";

/**
 * ----------------------------------------------------------
 * MFA Configuration Entity
 * ----------------------------------------------------------
 */

export interface MFAConfigurationEntity {

  configurationId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  enabled: boolean;

  primaryMethod: MFAMethod;

  secretReference: string;

  activatedAt?: Date;

  updatedAt: Date;

  disabledAt?: Date;
}
