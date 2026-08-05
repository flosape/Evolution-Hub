/**
 * ==========================================================
 * Evolution Hub Operating System
 * Device Trust Engine Contract
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
  OrganizationID,
  WorkspaceID,
} from "./types";

/**
 * ----------------------------------------------------------
 * Device Trust Level
 * ----------------------------------------------------------
 */

export enum DeviceTrustLevel {
  TRUSTED = "TRUSTED",
  NEW = "NEW",
  SUSPICIOUS = "SUSPICIOUS",
  BLOCKED = "BLOCKED",
}

/**
 * ----------------------------------------------------------
 * Device Status
 * ----------------------------------------------------------
 */

export enum DeviceStatus {
  ACTIVE = "ACTIVE",
  REVOKED = "REVOKED",
  LOST = "LOST",
  COMPROMISED = "COMPROMISED",
}

/**
 * ----------------------------------------------------------
 * Device Identity
 * ----------------------------------------------------------
 */

export interface DeviceIdentity {
  deviceId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  organizationId: OrganizationID;

  workspaceId: WorkspaceID;
}

/**
 * ----------------------------------------------------------
 * Device Information
 * ----------------------------------------------------------
 */

export interface DeviceInformation {
  name: string;

  type: string;

  operatingSystem: string;

  client: string;

  fingerprint: string;
}

/**
 * ----------------------------------------------------------
 * Registered Device
 * ----------------------------------------------------------
 */

export interface RegisteredDevice {
  identity: DeviceIdentity;

  information: DeviceInformation;

  trustLevel: DeviceTrustLevel;

  status: DeviceStatus;

  registeredAt: Date;

  lastSeenAt: Date;

  ipAddress?: string;
}

/**
 * ----------------------------------------------------------
 * Device Audit
 * ----------------------------------------------------------
 */

export interface DeviceAuditEvent {
  deviceId: string;

  evolutionId: EvolutionID;

  memberId: MemberID;

  event:
    | "DEVICE_REGISTERED"
    | "DEVICE_VERIFIED"
    | "DEVICE_TRUSTED"
    | "DEVICE_BLOCKED"
    | "DEVICE_REVOKED"
    | "DEVICE_LOST"
    | "DEVICE_COMPROMISED";

  timestamp: Date;

  ipAddress?: string;

  userAgent?: string;
}

/**
 * ----------------------------------------------------------
 * Device Trust Service Contract
 * ----------------------------------------------------------
 */

export interface DeviceTrustService {

  registerDevice(
    device: RegisteredDevice
  ): Promise<void>;

  getDevice(
    deviceId: string
  ): Promise<RegisteredDevice | null>;

  getMemberDevices(
    evolutionId: EvolutionID
  ): Promise<RegisteredDevice[]>;

  trustDevice(
    deviceId: string
  ): Promise<void>;

  blockDevice(
    deviceId: string
  ): Promise<void>;

  revokeDevice(
    deviceId: string
  ): Promise<void>;

  updateLastSeen(
    deviceId: string
  ): Promise<void>;
}
