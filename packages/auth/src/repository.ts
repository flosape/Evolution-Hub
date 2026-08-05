/**
 * ==========================================================
 * Evolution Hub Operating System
 * User Repository Contract
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
  MemberIdentity,
  OrganizationID,
  WorkspaceID,
} from "./types";

/**
 * ----------------------------------------------------------
 * User Lookup
 * ----------------------------------------------------------
 */

export interface UserLookup {
  evolutionId?: EvolutionID;

  memberId?: MemberID;

  email?: string;
}

/**
 * ----------------------------------------------------------
 * User Creation
 * ----------------------------------------------------------
 */

export interface CreateUserRequest {
  evolutionId: EvolutionID;

  memberId: MemberID;

  organizationId: OrganizationID;

  workspaceId: WorkspaceID;

  email: string;

  displayName: string;
}

/**
 * ----------------------------------------------------------
 * User Update
 * ----------------------------------------------------------
 */

export interface UpdateUserRequest {
  evolutionId: EvolutionID;

  displayName?: string;

  emailVerified?: boolean;

  workspaceId?: WorkspaceID;

  organizationId?: OrganizationID;
}

/**
 * ----------------------------------------------------------
 * User Repository Contract
 * ----------------------------------------------------------
 */

export interface UserRepository {

  create(
    request: CreateUserRequest
  ): Promise<MemberIdentity>;

  findOne(
    lookup: UserLookup
  ): Promise<MemberIdentity | null>;

  exists(
    lookup: UserLookup
  ): Promise<boolean>;

  update(
    request: UpdateUserRequest
  ): Promise<MemberIdentity>;

  delete(
    evolutionId: EvolutionID
  ): Promise<void>;

  listByOrganization(
    organizationId: OrganizationID
  ): Promise<MemberIdentity[]>;

  listByWorkspace(
    workspaceId: WorkspaceID
  ): Promise<MemberIdentity[]>;
}
