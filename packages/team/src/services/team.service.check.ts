import { TeamServiceImpl } from "./team.service.impl.ts";

const teamRepository = {
  create: async (team: any) => team,

  findById: async (teamId: string) =>
    teamId === "team-1"
      ? {
          id: "team-1",
          name: "Test Team",
          status: "ACTIVE",
        }
      : null,

  findAll: async () => [
    {
      id: "team-1",
      name: "Test Team",
      status: "ACTIVE",
    },
  ],

  update: async (team: any) => team,

  updateStatus: async (teamId: string, status: string) => ({
    id: teamId,
    name: "Test Team",
    status,
  }),
};

const membershipRepository = {
  createMembership: async (membership: any) => membership,

  findMembershipById: async () => null,

  findByTeamId: async () => [],

  updateStatus: async (id: string, status: string) => ({
    id,
    teamId: "team-1",
    memberId: "member-1",
    status,
  }),
};

const roleRepository = {
  createRole: async (role: any) => role,

  findRolesByTeamId: async () => [],

  updateRole: async (role: any) => role,

  updateStatus: async (id: string, status: string) => ({
    id,
    teamId: "team-1",
    name: "Member",
    status,
  }),
};

const service = new TeamServiceImpl(
  teamRepository,
  membershipRepository,
  roleRepository,
);

const createdTeam = await service.createTeam({
  id: "team-1",
  name: "Test Team",
  status: "ACTIVE",
});

if (createdTeam.id !== "team-1") {
  throw new Error("createTeam failed");
}

const foundTeam = await service.getTeam("team-1");

if (!foundTeam || foundTeam.id !== "team-1") {
  throw new Error("getTeam failed");
}

const updatedTeam = await service.updateTeamStatus(
  "team-1",
  "INACTIVE",
);

if (updatedTeam.status !== "INACTIVE") {
  throw new Error("updateTeamStatus failed");
}

console.log("TEAM SERVICE CHECK: PASS");
