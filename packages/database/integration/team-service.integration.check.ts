import { createDatabaseClient } from "../client/index.ts";
import { DrizzleTeamRepository } from "../repository/drizzle-team.repository.ts";
import { DrizzleTeamMembershipRepository } from "../repository/drizzle-team-membership.repository.ts";
import { DrizzleTeamRoleRepository } from "../repository/drizzle-team-role.repository.ts";
import { TeamServiceImpl } from "@evolution-hub/team";

const DATABASE_URL =
  "postgresql://u0_a293@localhost:5432/evolution_hub";

const { client, db } = createDatabaseClient(DATABASE_URL);

const teamRepository = new DrizzleTeamRepository(db);
const membershipRepository =
  new DrizzleTeamMembershipRepository(db);
const roleRepository = new DrizzleTeamRoleRepository(db);

const service = new TeamServiceImpl(
  teamRepository,
  membershipRepository,
  roleRepository,
);

const teamId = "aaaaaaaa-1111-4111-8111-aaaaaaaaaaaa";
const membershipId = "bbbbbbbb-2222-4222-8222-bbbbbbbbbbbb";
const roleId = "cccccccc-3333-4333-8333-cccccccccccc";
const memberId = "dddddddd-4444-4444-8444-dddddddddddd";

try {
  await client.connect();

  await client.query(
    "DELETE FROM team_memberships WHERE id = $1",
    [membershipId],
  );

  await client.query(
    "DELETE FROM team_roles WHERE id = $1",
    [roleId],
  );

  await client.query(
    "DELETE FROM teams WHERE id = $1",
    [teamId],
  );

  const createdTeam = await service.createTeam({
    id: teamId,
    name: "Team Service Integration Test",
    status: "ACTIVE",
  });

  if (createdTeam.id !== teamId) {
    throw new Error("createTeam failed");
  }

  const foundTeam = await service.getTeam(teamId);

  if (!foundTeam || foundTeam.id !== teamId) {
    throw new Error("getTeam failed");
  }

  const createdMembership = await service.createMembership({
    id: membershipId,
    teamId,
    memberId,
    status: "ACTIVE",
  });

  if (createdMembership.id !== membershipId) {
    throw new Error("createMembership failed");
  }

  const memberships = await service.getTeamMemberships(teamId);

  if (
    memberships.length !== 1 ||
    memberships[0]?.id !== membershipId
  ) {
    throw new Error("getTeamMemberships failed");
  }

  const createdRole = await service.createRole({
    id: roleId,
    teamId,
    name: "Member",
    status: "ACTIVE",
  });

  if (createdRole.id !== roleId) {
    throw new Error("createRole failed");
  }

  const roles = await service.getTeamRoles(teamId);

  if (roles.length !== 1 || roles[0]?.id !== roleId) {
    throw new Error("getTeamRoles failed");
  }

  const updatedTeam = await service.updateTeamStatus(
    teamId,
    "INACTIVE",
  );

  if (updatedTeam.status !== "INACTIVE") {
    throw new Error("updateTeamStatus failed");
  }

  const updatedMembership =
    await service.updateMembershipStatus(
      membershipId,
      "INACTIVE",
    );

  if (updatedMembership.status !== "INACTIVE") {
    throw new Error("updateMembershipStatus failed");
  }

  const updatedRole = await service.updateRoleStatus(
    roleId,
    "INACTIVE",
  );

  if (updatedRole.status !== "INACTIVE") {
    throw new Error("updateRoleStatus failed");
  }

  console.log("TEAM SERVICE → DATABASE INTEGRATION: PASS");
} finally {
  await client.query(
    "DELETE FROM team_memberships WHERE id = $1",
    [membershipId],
  ).catch(() => {});

  await client.query(
    "DELETE FROM team_roles WHERE id = $1",
    [roleId],
  ).catch(() => {});

  await client.query(
    "DELETE FROM teams WHERE id = $1",
    [teamId],
  ).catch(() => {});

  await client.end();
}
