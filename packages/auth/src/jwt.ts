/**
 * ==========================================================
 * Evolution Hub Operating System
 * JWT Engine Contract
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
  AuthProvider,
  MFAStatus,
} from "./types";

/**
 * ----------------------------------------------------------
 * JWT Configuration
 * ----------------------------------------------------------
 */

export interface JWTConfiguration {
  algorithm: "HS256";

  accessTokenExpiryMinutes: number;

  refreshTokenExpiryDays: number;

  rotateRefreshTokens: boolean;

  revokeTokensImmediately: boolean;
}

/**
 * ----------------------------------------------------------
 * JWT Claims
 * ----------------------------------------------------------
 */

export interface JWTClaims {
  evolutionId: EvolutionID;

  memberId: MemberID;

  organizationId: OrganizationID;

  workspaceId: WorkspaceID;

  provider: AuthProvider;

  mfa: MFAStatus;

  sessionId: string;

  deviceId: string;
}

/**
 * ----------------------------------------------------------
 * Access Token
 * ----------------------------------------------------------
 */

export interface AccessToken {
  token: string;

  expiresAt: Date;

  claims: JWTClaims;
}

/**
 * ----------------------------------------------------------
 * Refresh Token
 * ----------------------------------------------------------
 */

export interface RefreshToken {
  token: string;

  expiresAt: Date;

  sessionId: string;

  revoked: boolean;
}

/**
 * ----------------------------------------------------------
 * JWT Verification
 * ----------------------------------------------------------
 */

export interface TokenVerificationResult {
  valid: boolean;

  expired: boolean;

  revoked: boolean;

  claims?: JWTClaims;
}

/**
 * ----------------------------------------------------------
 * Token Audit
 * ----------------------------------------------------------
 */

export interface JWTAuditEvent {
  evolutionId: EvolutionID;

  memberId: MemberID;

  event:
    | "TOKEN_CREATED"
    | "TOKEN_REFRESHED"
    | "TOKEN_REVOKED"
    | "LOGIN"
    | "LOGOUT"
    | "LOGOUT_ALL";

  timestamp: Date;

  ipAddress?: string;

  userAgent?: string;
}

/**
 * ----------------------------------------------------------
 * JWT Service Contract
 * ----------------------------------------------------------
 */

export interface JWTService {

  getConfiguration(): JWTConfiguration;

  generateAccessToken(
    claims: JWTClaims
  ): Promise<AccessToken>;

  generateRefreshToken(
    claims: JWTClaims
  ): Promise<RefreshToken>;

  verifyAccessToken(
    token: string
  ): Promise<TokenVerificationResult>;

  verifyRefreshToken(
    token: string
  ): Promise<TokenVerificationResult>;

  refreshAccessToken(
    refreshToken: string
  ): Promise<AccessToken>;

  revokeToken(
    token: string
  ): Promise<void>;

  revokeAllTokens(
    evolutionId: EvolutionID
  ): Promise<void>;
}
