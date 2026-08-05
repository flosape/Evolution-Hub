/**
 * ==========================================================
 * Evolution Hub Operating System
 * Member Entity Contract
 *
 * Foundation Milestone 010.1
 *
 * Engineering Law No. 1
 * Every entity has exactly one responsibility.
 *
 * Engineering Law No. 2
 * Every member owns one trusted identity.
 *
 * Engineering Law No. 26
 * Every member maintains a unified identity across
 * the Evolution Hub ecosystem.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
  OrganizationID,
  WorkspaceID,
  MemberStatus,
} from "./types";

/**
 * ----------------------------------------------------------
 * Member Identity
 * ----------------------------------------------------------
 */

export interface MemberEntity {

  memberId: MemberID;

  evolutionId: EvolutionID;

  organizationId: OrganizationID;

  workspaceId: WorkspaceID;

  firstName: string;

  lastName: string;

  displayName: string;

  email: string;

  phoneNumber?: string;

  avatarUrl?: string;

  status: MemberStatus;

  createdAt: Date;

  updatedAt: Date;

  lastLoginAt?: Date;
}
