/**
 * ==========================================================
 * Evolution Hub Operating System
 * Device Repository Contract
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
  RegisteredDevice,
  DeviceTrustLevel,
  DeviceStatus,
} from "./device";

/**
 * ----------------------------------------------------------
 * Device Repository Contract
 * ----------------------------------------------------------
 */

export interface DeviceRepository {

  registerDevice(
    device: RegisteredDevice
  ): Promise<void>;

  getDevice(
    deviceId: string
  ): Promise<RegisteredDevice | null>;

  getMemberDevices(
    evolutionId: EvolutionID
  ): Promise<RegisteredDevice[]>;

  updateTrustLevel(
    deviceId: string,
    trustLevel: DeviceTrustLevel
  ): Promise<void>;

  updateStatus(
    deviceId: string,
    status: DeviceStatus
  ): Promise<void>;

  updateLastSeen(
    deviceId: string,
    lastSeenAt: Date,
    ipAddress?: string
  ): Promise<void>;

  revokeDevice(
    deviceId: string
  ): Promise<void>;

  deleteDevice(
    deviceId: string
  ): Promise<void>;
}
