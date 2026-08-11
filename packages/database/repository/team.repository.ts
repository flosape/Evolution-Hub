import type { Team } from "@evolution-hub/team";

export interface TeamRepository {
  create(team: Team): Promise<Team>;
  findById(teamId: string): Promise<Team | null>;
  findAll(): Promise<Team[]>;
  update(team: Team): Promise<Team>;
  updateStatus(teamId: string, status: string): Promise<Team>;
}
