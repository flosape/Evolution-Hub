/**
 * ==========================================================
 * Evolution Hub Operating System
 * Authentication API Contract
 *
 * Engineering Law No. 7
 * API contracts are designed and approved before
 * implementation.
 *
 * Engineering Law No. 26
 * Security begins when identity can be trusted.
 *
 * Engineering Law No. 28
 * JWT proves identity.
 * Authorization proves permission.
 * ==========================================================
 */

import type {
  EvolutionID,
  MemberIdentity,
} from "./types";

import type {
  PasswordRecoveryRequest,
  PasswordResetRequest,
} from "./password";

import type {
  RecoveryRequest,
  RecoveryResult,
} from "./recovery";

import type {
  ActiveSession,
} from "./session";

import type {
  RegisteredDevice,
} from "./device";

import type {
  MFAVerificationResult,
} from "./mfa";

/**
 * ----------------------------------------------------------
 * Authentication Requests
 * ----------------------------------------------------------
 */

export interface LoginRequest {
  email: string;

  password: string;

  deviceId?: string;
}

export interface RefreshRequest {
  refreshToken: string;
}

export interface LogoutRequest {
  sessionId: string;
}

/**
 * ----------------------------------------------------------
 * Authentication Responses
 * ----------------------------------------------------------
 */

export interface AuthenticationTokens {
  accessToken: string;

  refreshToken: string;
}

export interface AuthenticationResponse {
  member: MemberIdentity;

  tokens: AuthenticationTokens;
}

/**
 * ----------------------------------------------------------
 * Authentication API Contract
 * ----------------------------------------------------------
 */

export interface AuthenticationAPI {

  login(
    request: LoginRequest
  ): Promise<AuthenticationResponse>;

  refreshSession(
    request: RefreshRequest
  ): Promise<AuthenticationTokens>;

  logout(
    request: LogoutRequest
  ): Promise<void>;

  logoutAll(
    evolutionId: EvolutionID
  ): Promise<void>;

  recoverYourEvolution(
    request: RecoveryRequest
  ): Promise<void>;

  createNewPassword(
    request: PasswordResetRequest
  ): Promise<RecoveryResult>;

  verifyMFA(
    challengeId: string,
    code: string
  ): Promise<MFAVerificationResult>;

  getActiveSessions(
    evolutionId: EvolutionID
  ): Promise<ActiveSession[]>;

  getTrustedDevices(
    evolutionId: EvolutionID
  ): Promise<RegisteredDevice[]>;
}
