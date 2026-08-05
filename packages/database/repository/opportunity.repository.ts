/*
==========================================================
EVOLUTION HUB OPERATING SYSTEM
REPOSITORY CONTRACT
==========================================================

REPOSITORY
Opportunity Repository

PHASE
V — Repository Implementations

STATUS
FOUNDATION CONTRACT

PURPOSE

The Opportunity Repository is the single
authoritative persistence layer for
Opportunities within Evolution Hub.

It persists Opportunity entities that
represent discoverable value across the
Evolution Hub ecosystem.

Opportunities may originate from
Members, Teams, Organizations,
Projects, Industries, or the Platform
while remaining governed by the
constitutional hierarchy.

The repository performs persistence only
and shall never recommend, rank,
promote, govern, or execute
Opportunities.

CONSTITUTIONAL PRINCIPLES

• One repository for one aggregate.
• One responsibility only.
• Persistence only.
• Opportunities represent value.
• Organizations provide stewardship.
• Platform governs the ecosystem.
• No business logic.
• No constitutional authority.
• No governance decisions.
• No recommendation logic.
• No AI reasoning.
• No API logic.
• No authentication logic.

ENGINEERING PRINCIPLES

Single Responsibility.
Build Once. Reuse Everywhere.
Technological Harmony.
Review Before Expansion.

REPOSITORY LAW

Repository Law No. 001
Constitutional Repository Rule

==========================================================
*/

export interface OpportunityRepository {
  findById(id: string): Promise<unknown | null>;

  findByProjectId(
    projectId: string
  ): Promise<unknown[]>;

  findByWorkspaceId(
    workspaceId: string
  ): Promise<unknown[]>;

  findByTeamId(
    teamId: string
  ): Promise<unknown[]>;

  findByMemberId(
    memberId: string
  ): Promise<unknown[]>;

  create(data: unknown): Promise<unknown>;

  update(id: string, data: unknown): Promise<unknown>;

  archive(id: string): Promise<void>;

  restore(id: string): Promise<void>;

  exists(id: string): Promise<boolean>;
}
