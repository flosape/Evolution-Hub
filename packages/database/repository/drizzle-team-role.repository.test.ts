import { describe, it, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";

import { createDatabaseClient } from "../client/index.ts";
import { DrizzleTeamRoleRepository } from "./drizzle-team-role.repository.ts";
import { DrizzleTeamRepository } from "./drizzle-team.repository.ts";

const DATABASE_URL =
  process.env.DATABASE_URL ??
  "postgresql://u0_a293@localhost:5432/evolution_hub";

describe("DrizzleTeamRoleRepository", () => {
  const { client, db } = createDatabaseClient(DATABASE_URL);

  const roleRepository = new DrizzleTeamRoleRepository(db);
  const teamRepository = new DrizzleTeamRepository(db);

  const teamId = "99999999-9999-4999-8999-999999999999";
  const roleId = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
  const secondRoleId = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";

  before(async () => {
    await client.connect();
  });

  beforeEach(async () => {
    await client.query(
      "DELETE FROM team_roles WHERE id IN ($1, $2)",
      [roleId, secondRoleId],
    );

    await client.query(
      "DELETE FROM teams WHERE id = $1",
      [teamId],
    );

    await teamRepository.create({
      id: teamId,
      name: "Role Repository Test Team",
      status: "ACTIVE",
    });
  });

  after(async () => {
    await client.query(
      "DELETE FROM team_roles WHERE id IN ($1, $2)",
      [roleId, secondRoleId],
    );

    await client.query(
      "DELETE FROM teams WHERE id = $1",
      [teamId],
    );

    await client.end();
  });

  it("should create and retrieve Team Roles by Team ID", async () => {
    const role = {
      id: roleId,
      teamId,
      name: "Administrator",
      status: "ACTIVE",
    };

    const created = await roleRepository.createRole(role);

    assert.deepEqual(created, role);

    const roles = await roleRepository.findRolesByTeamId(teamId);

    assert.deepEqual(roles, [role]);
  });

  it("should return an empty list when a Team has no Roles", async () => {
    const roles = await roleRepository.findRolesByTeamId(teamId);

    assert.deepEqual(roles, []);
  });

  it("should return all Roles belonging to a Team", async () => {
    const firstRole = {
      id: roleId,
      teamId,
      name: "Administrator",
      status: "ACTIVE",
    };

    const secondRole = {
      id: secondRoleId,
      teamId,
      name: "Member",
      status: "ACTIVE",
    };

    await roleRepository.createRole(firstRole);
    await roleRepository.createRole(secondRole);

    const roles = await roleRepository.findRolesByTeamId(teamId);

    assert.equal(roles.length, 2);
    assert.deepEqual(roles, [firstRole, secondRole]);
  });

  it("should update a Team Role", async () => {
    const original = {
      id: roleId,
      teamId,
      name: "Member",
      status: "ACTIVE",
    };

    await roleRepository.createRole(original);

    const updated = {
      id: roleId,
      teamId,
      name: "Administrator",
      status: "ACTIVE",
    };

    const result = await roleRepository.updateRole(updated);

    assert.deepEqual(result, updated);

    const roles = await roleRepository.findRolesByTeamId(teamId);

    assert.deepEqual(roles, [updated]);
  });

  it("should update Team Role status", async () => {
    const role = {
      id: roleId,
      teamId,
      name: "Administrator",
      status: "ACTIVE",
    };

    await roleRepository.createRole(role);

    const updated = await roleRepository.updateStatus(
      roleId,
      "INACTIVE",
    );

    assert.deepEqual(updated, {
      ...role,
      status: "INACTIVE",
    });

    const roles = await roleRepository.findRolesByTeamId(teamId);

    assert.deepEqual(roles, [updated]);
  });
});
