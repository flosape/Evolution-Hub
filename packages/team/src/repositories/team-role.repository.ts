import type { TeamRole } from "../domain/team-role";

export interface TeamRoleRepository {
  createRole(role: TeamRole): Promise<TeamRole>;


  findRolesByTeamId(teamId: string): Promise<TeamRole[]>;

  updateRole(role: TeamRole): Promise<TeamRole>;

  updateStatus(id: string, status: string): Promise<TeamRole>;
}
