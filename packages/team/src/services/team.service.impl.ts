import type { Team } from "../domain/team";
import type { TeamMembership } from "../domain/team-membership";
import type { TeamRole } from "../domain/team-role";

import type { TeamRepository } from "../repositories/team.repository";
import type { TeamMembershipRepository } from "../repositories/team-membership.repository";
import type { TeamRoleRepository } from "../repositories/team-role.repository";

import type { TeamService } from "./team.service";

export class TeamServiceImpl implements TeamService {
  private readonly teamRepository: TeamRepository;
  private readonly membershipRepository: TeamMembershipRepository;
  private readonly roleRepository: TeamRoleRepository;

  constructor(
    teamRepository: TeamRepository,
    membershipRepository: TeamMembershipRepository,
    roleRepository: TeamRoleRepository
  ) {
    this.teamRepository = teamRepository;
    this.membershipRepository = membershipRepository;
    this.roleRepository = roleRepository;
  }

  async createTeam(team: Team): Promise<Team> {
    return this.teamRepository.create(team);
  }

  async getTeam(teamId: string): Promise<Team | null> {
    return this.teamRepository.findById(teamId);
  }

  async getAllTeams(): Promise<Team[]> {
    return this.teamRepository.findAll();
  }

  async updateTeam(team: Team): Promise<Team> {
    return this.teamRepository.update(team);
  }

  async updateTeamStatus(
    teamId: string,
    status: string
  ): Promise<Team> {
    return this.teamRepository.updateStatus(teamId, status);
  }

  async createMembership(
    membership: TeamMembership
  ): Promise<TeamMembership> {
    return this.membershipRepository.createMembership(membership);
  }

  async getMembership(
    membershipId: string
  ): Promise<TeamMembership | null> {
    return this.membershipRepository.findMembershipById(membershipId);
  }

  async getTeamMemberships(
    teamId: string
  ): Promise<TeamMembership[]> {
    return this.membershipRepository.findByTeamId(teamId);
  }

  async updateMembershipStatus(
    membershipId: string,
    status: string
  ): Promise<TeamMembership> {
    return this.membershipRepository.updateStatus(
      membershipId,
      status
    );
  }

  async createRole(role: TeamRole): Promise<TeamRole> {
    return this.roleRepository.createRole(role);
  }

  async getTeamRoles(teamId: string): Promise<TeamRole[]> {
    return this.roleRepository.findRolesByTeamId(teamId);
  }

  async updateRole(role: TeamRole): Promise<TeamRole> {
    return this.roleRepository.updateRole(role);
  }

  async updateRoleStatus(
    roleId: string,
    status: string
  ): Promise<TeamRole> {
    return this.roleRepository.updateStatus(roleId, status);
  }
}
