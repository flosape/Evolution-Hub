/**
 * ==========================================================
 * Evolution Hub Operating System
 * Trusted Device Entity Contract
 *
 * Foundation Milestone 010.5
 *
 * Engineering Law No. 1
 * Every entity has exactly one responsibility.
 *
 * Engineering Law No. 9
 * Devices are never trusted automatically.
 *
 * Engineering Law No. 38
 * Compromised devices must be revocable independently.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberID,
  OrganizationID,
  WorkspaceID,
} from "./types";

import type {
  DeviceTrustLevel,
  DeviceStatus,
} from "./device";

/**
 * ----------------------------------------------------------
 * Trusted Device Entity
 * ----------------------------------------------------------
 */

export interface TrustedDeviceEntity {

  deviceId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  organizationId: OrganizationID;

  workspaceId: WorkspaceID;

  fingerprint: string;

  deviceName: string;

  operatingSystem: string;

  client: string;

  trustLevel: DeviceTrustLevel;

  status: DeviceStatus;

  registeredAt: Date;

  lastSeenAt: Date;

  ipAddress?: string;

  userAgent?: string;

  revokedAt?: Date;
}
