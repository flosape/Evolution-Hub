import type { TeamMembership } from "@evolution-hub/team";
import { eq } from "drizzle-orm";

import type { Database } from "../client/types";
import { teamMemberships } from "../drizzle/schema";
import type { TeamMembershipRepository } from "./team-membership.repository";

export class DrizzleTeamMembershipRepository
  implements TeamMembershipRepository
{
  constructor(private readonly db: Database) {}

  async createMembership(
    membership: TeamMembership,
  ): Promise<TeamMembership> {
    const [record] = await this.db
      .insert(teamMemberships)
      .values({
        id: membership.id,
        teamId: membership.teamId,
        memberId: membership.memberId,
        status: membership.status,
      })
      .returning();

    if (!record) {
      throw new Error(
        `Failed to create team membership: ${membership.id}`,
      );
    }

    return record;
  }

  async findMembershipById(
    id: string,
  ): Promise<TeamMembership | null> {
    const [record] = await this.db
      .select()
      .from(teamMemberships)
      .where(eq(teamMemberships.id, id))
      .limit(1);

    return record ?? null;
  }

  async findByTeamId(
    teamId: string,
  ): Promise<TeamMembership[]> {
    return this.db
      .select()
      .from(teamMemberships)
      .where(eq(teamMemberships.teamId, teamId));
  }

  async updateStatus(
    id: string,
    status: string,
  ): Promise<TeamMembership> {
    const [record] = await this.db
      .update(teamMemberships)
      .set({ status })
      .where(eq(teamMemberships.id, id))
      .returning();

    if (!record) {
      throw new Error(`Team membership not found: ${id}`);
    }

    return record;
  }
}
