import { describe, it, before, after, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { createDatabaseClient } from "../client/index.ts";
import { DrizzleTeamMembershipRepository } from "./drizzle-team-membership.repository.ts";
import { DrizzleTeamRepository } from "./drizzle-team.repository.ts";

const DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://u0_a293@localhost:5432/evolution_hub";

describe("DrizzleTeamMembershipRepository", () => {
  const { client, db } = createDatabaseClient(DATABASE_URL);
  const membershipRepository = new DrizzleTeamMembershipRepository(db);
  const teamRepository = new DrizzleTeamRepository(db);

  const teamId = "33333333-3333-4333-8333-333333333333";
  const membershipId = "44444444-4444-4444-8444-444444444444";
  const secondMembershipId = "55555555-5555-4555-8555-555555555555";

  before(async () => {
    await client.connect();
  });

  beforeEach(async () => {
    await client.query(
      "DELETE FROM team_memberships WHERE id IN ($1, $2)",
      [membershipId, secondMembershipId],
    );

    await client.query(
      "DELETE FROM teams WHERE id = $1",
      [teamId],
    );

    await teamRepository.create({
      id: teamId,
      name: "Membership Repository Test Team",
      status: "ACTIVE",
    });
  });

  after(async () => {
    await client.query(
      "DELETE FROM team_memberships WHERE id IN ($1, $2)",
      [membershipId, secondMembershipId],
    );

    await client.query(
      "DELETE FROM teams WHERE id = $1",
      [teamId],
    );

    await client.end();
  });

  it("should create and retrieve a Team Membership", async () => {
    const membership = {
      id: membershipId,
      teamId,
      memberId: "66666666-6666-4666-8666-666666666666",
      status: "ACTIVE",
    };

    const created = await membershipRepository.createMembership(membership);

    assert.deepEqual(created, membership);

    const found = await membershipRepository.findMembershipById(membershipId);

    assert.deepEqual(found, membership);
  });

  it("should return null when a Team Membership does not exist", async () => {
    const found = await membershipRepository.findMembershipById(
      "77777777-7777-4777-8777-777777777777",
    );

    assert.equal(found, null);
  });

  it("should return memberships by Team ID", async () => {
    const firstMembership = {
      id: membershipId,
      teamId,
      memberId: "66666666-6666-4666-8666-666666666666",
      status: "ACTIVE",
    };

    const secondMembership = {
      id: secondMembershipId,
      teamId,
      memberId: "88888888-8888-4888-8888-888888888888",
      status: "ACTIVE",
    };

    await membershipRepository.createMembership(firstMembership);
    await membershipRepository.createMembership(secondMembership);

    const memberships = await membershipRepository.findByTeamId(teamId);

    assert.equal(memberships.length, 2);
    assert.deepEqual(memberships, [firstMembership, secondMembership]);
  });

  it("should update Team Membership status", async () => {
    const membership = {
      id: membershipId,
      teamId,
      memberId: "66666666-6666-4666-8666-666666666666",
      status: "ACTIVE",
    };

    await membershipRepository.createMembership(membership);

    const updated = await membershipRepository.updateStatus(
      membershipId,
      "INACTIVE",
    );

    assert.deepEqual(updated, {
      ...membership,
      status: "INACTIVE",
    });

    const found = await membershipRepository.findMembershipById(membershipId);

    assert.deepEqual(found, updated);
  });
});
