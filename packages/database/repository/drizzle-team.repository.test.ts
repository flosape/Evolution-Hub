import { describe, it, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";

import { createDatabaseClient } from "../client/index.ts";
import { DrizzleTeamRepository } from "./drizzle-team.repository.ts";

const DATABASE_URL =
  process.env.DATABASE_URL ??
  "postgresql://u0_a293@localhost:5432/evolution_hub";

describe("DrizzleTeamRepository", () => {
  const { client, db } = createDatabaseClient(DATABASE_URL);
  const repository = new DrizzleTeamRepository(db);

  const teamId = "11111111-1111-4111-8111-111111111111";
  const secondTeamId = "22222222-2222-4222-8222-222222222222";

  before(async () => {
    await client.connect();

    await client.query(
      "DELETE FROM teams WHERE id IN ($1, $2)",
      [teamId, secondTeamId],
    );
  });

  beforeEach(async () => {
    await client.query(
      "DELETE FROM teams WHERE id IN ($1, $2)",
      [teamId, secondTeamId],
    );
  });

  after(async () => {
    await client.query(
      "DELETE FROM teams WHERE id IN ($1, $2)",
      [teamId, secondTeamId],
    );

    await client.end();
  });

  it("should create and retrieve a Team", async () => {
    const team = {
      id: teamId,
      name: "Repository Test Team",
      status: "ACTIVE",
    };

    const created = await repository.create(team);

    assert.deepEqual(created, team);

    const found = await repository.findById(teamId);

    assert.deepEqual(found, team);
  });

  it("should return null when a Team does not exist", async () => {
    const found = await repository.findById(
      "99999999-9999-4999-8999-999999999999",
    );

    assert.equal(found, null);
  });

  it("should return all Teams", async () => {
    const firstTeam = {
      id: teamId,
      name: "First Repository Team",
      status: "ACTIVE",
    };

    const secondTeam = {
      id: secondTeamId,
      name: "Second Repository Team",
      status: "ACTIVE",
    };

    await repository.create(firstTeam);
    await repository.create(secondTeam);

    const teams = await repository.findAll();

    assert.equal(teams.length, 2);
    assert.deepEqual(teams, [firstTeam, secondTeam]);
  });

  it("should update a Team", async () => {
    const original = {
      id: teamId,
      name: "Original Team",
      status: "ACTIVE",
    };

    await repository.create(original);

    const updated = {
      id: teamId,
      name: "Updated Team",
      status: "ACTIVE",
    };

    const result = await repository.update(updated);

    assert.deepEqual(result, updated);

    const found = await repository.findById(teamId);

    assert.deepEqual(found, updated);
  });

  it("should update Team status", async () => {
    const team = {
      id: teamId,
      name: "Status Test Team",
      status: "ACTIVE",
    };

    await repository.create(team);

    const updated = await repository.updateStatus(teamId, "INACTIVE");

    assert.deepEqual(updated, {
      id: teamId,
      name: team.name,
      status: "INACTIVE",
    });

    const found = await repository.findById(teamId);

    assert.deepEqual(found, updated);
  });
});
