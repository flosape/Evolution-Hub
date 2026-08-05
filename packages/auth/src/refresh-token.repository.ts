/**
 * ==========================================================
 * Evolution Hub Operating System
 * Refresh Token Repository Contract
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
} from "./types";

import type {
  RefreshToken,
} from "./jwt";

/**
 * ----------------------------------------------------------
 * Refresh Token Record
 * ----------------------------------------------------------
 */

export interface RefreshTokenRecord {
  evolutionId: EvolutionID;

  memberId: MemberID;

  token: RefreshToken;
}

/**
 * ----------------------------------------------------------
 * Refresh Token Repository Contract
 * ----------------------------------------------------------
 */

export interface RefreshTokenRepository {

  saveToken(
    record: RefreshTokenRecord
  ): Promise<void>;

  getToken(
    tokenId: string
  ): Promise<RefreshToken | null>;

  getMemberTokens(
    evolutionId: EvolutionID
  ): Promise<RefreshToken[]>;

  rotateToken(
    tokenId: string,
    replacement: RefreshToken
  ): Promise<void>;

  revokeToken(
    tokenId: string
  ): Promise<void>;

  revokeAllTokens(
    evolutionId: EvolutionID
  ): Promise<void>;

  deleteExpiredTokens(): Promise<void>;
}
