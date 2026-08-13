import type { Team } from "../domain/team";
import type { TeamMembership } from "../domain/team-membership";
import type { TeamRole } from "../domain/team-role";

export interface TeamService {
  // Team Lifecycle Management
  createTeam(team: Team): Promise<Team>;
  getTeam(teamId: string): Promise<Team | null>;
  getAllTeams(): Promise<Team[]>;
  updateTeam(team: Team): Promise<Team>;
  updateTeamStatus(teamId: string, status: string): Promise<Team>;

  // Team Membership Management
  createMembership(
    membership: TeamMembership
  ): Promise<TeamMembership>;

  getMembership(
    membershipId: string
  ): Promise<TeamMembership | null>;

  getTeamMemberships(
    teamId: string
  ): Promise<TeamMembership[]>;

  updateMembershipStatus(
    membershipId: string,
    status: string
  ): Promise<TeamMembership>;

  // Team Role Management
  createRole(role: TeamRole): Promise<TeamRole>;
  getTeamRoles(teamId: string): Promise<TeamRole[]>;
  updateRole(role: TeamRole): Promise<TeamRole>;
  updateRoleStatus(
    roleId: string,
    status: string
  ): Promise<TeamRole>;
}
