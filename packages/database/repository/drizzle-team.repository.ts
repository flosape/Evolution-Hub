import type { Team } from "@evolution-hub/team";
import { eq } from "drizzle-orm";

import type { Database } from "../client/types";
import { teams } from "../drizzle/schema";
import type { TeamRepository } from "./team.repository";

export class DrizzleTeamRepository implements TeamRepository {
  constructor(private readonly db: Database) {}

  async create(team: Team): Promise<Team> {
    const [record] = await this.db
      .insert(teams)
      .values({
        id: team.id,
        name: team.name,
        status: team.status,
      })
      .returning();

    if (!record) {
      throw new Error(`Failed to create team: ${team.id}`);
    }

    return record;
  }

  async findById(teamId: string): Promise<Team | null> {
    const [record] = await this.db
      .select()
      .from(teams)
      .where(eq(teams.id, teamId))
      .limit(1);

    return record ?? null;
  }

  async findAll(): Promise<Team[]> {
    return this.db.select().from(teams);
  }

  async update(team: Team): Promise<Team> {
    const [record] = await this.db
      .update(teams)
      .set({
        name: team.name,
        status: team.status,
      })
      .where(eq(teams.id, team.id))
      .returning();

    if (!record) {
      throw new Error(`Team not found: ${team.id}`);
    }

    return record;
  }

  async updateStatus(teamId: string, status: string): Promise<Team> {
    const [record] = await this.db
      .update(teams)
      .set({ status })
      .where(eq(teams.id, teamId))
      .returning();

    if (!record) {
      throw new Error(`Team not found: ${teamId}`);
    }

    return record;
  }
}
