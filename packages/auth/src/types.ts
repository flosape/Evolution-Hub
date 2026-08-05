/**
 * ==========================================================
 * Evolution Hub Operating System
 * Universal Identity Contract
 *
 * Engineering Law No. 26
 * One Identity.
 * One Truth.
 * Infinite Opportunities.
 * ==========================================================
 */

export type EvolutionID = string;
export type MemberID = string;
export type OrganizationID = string;
export type WorkspaceID = string;

export enum IdentityStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  SUSPENDED = "SUSPENDED",
  LOCKED = "LOCKED",
  DELETED = "DELETED",
}

export enum AuthProvider {
  PASSWORD = "PASSWORD",
  PASSKEY = "PASSKEY",
  GOOGLE = "GOOGLE",
  MICROSOFT = "MICROSOFT",
  APPLE = "APPLE",
}

export enum SessionStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  REVOKED = "REVOKED",
}

export enum DeviceTrust {
  TRUSTED = "TRUSTED",
  NEW = "NEW",
  BLOCKED = "BLOCKED",
}

export enum MFAStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  REQUIRED = "REQUIRED",
}

export interface MemberIdentity {
  evolutionId: EvolutionID;
  memberId: MemberID;

  organizationId: OrganizationID;
  workspaceId: WorkspaceID;

  email: string;
  emailVerified: boolean;

  displayName: string;

  status: IdentityStatus;
  provider: AuthProvider;
  mfa: MFAStatus;

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
