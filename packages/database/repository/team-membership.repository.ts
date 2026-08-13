import type { TeamMembership } from "@evolution-hub/team";

export interface TeamMembershipRepository {
  createMembership(membership: TeamMembership): Promise<TeamMembership>;
  findMembershipById(id: string): Promise<TeamMembership | null>;
  findByTeamId(teamId: string): Promise<TeamMembership[]>;
  updateStatus(id: string, status: string): Promise<TeamMembership>;
}
