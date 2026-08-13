import type { TeamRole } from "@evolution-hub/team";
import { eq } from "drizzle-orm";

import type { Database } from "../client/types";
import { teamRoles } from "../drizzle/schema.ts";
import type { TeamRoleRepository } from "./team-role.repository";

export class DrizzleTeamRoleRepository implements TeamRoleRepository {
  private readonly db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  async createRole(role: TeamRole): Promise<TeamRole> {
    const [record] = await this.db
      .insert(teamRoles)
      .values({
        id: role.id,
        teamId: role.teamId,
        name: role.name,
        status: role.status,
      })
      .returning();

    if (!record) {
      throw new Error(`Failed to create team role: ${role.id}`);
    }

    return record;
  }

  async findRolesByTeamId(teamId: string): Promise<TeamRole[]> {
    return this.db
      .select()
      .from(teamRoles)
      .where(eq(teamRoles.teamId, teamId));
  }

  async updateRole(role: TeamRole): Promise<TeamRole> {
    const [record] = await this.db
      .update(teamRoles)
      .set({
        name: role.name,
        status: role.status,
      })
      .where(eq(teamRoles.id, role.id))
      .returning();

    if (!record) {
      throw new Error(`Team role not found: ${role.id}`);
    }

    return record;
  }

  async updateStatus(id: string, status: string): Promise<TeamRole> {
    const [record] = await this.db
      .update(teamRoles)
      .set({ status })
      .where(eq(teamRoles.id, id))
      .returning();

    if (!record) {
      throw new Error(`Team role not found: ${id}`);
    }

    return record;
  }
}
