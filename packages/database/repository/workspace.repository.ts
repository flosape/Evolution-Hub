/*
==========================================================
EVOLUTION HUB OPERATING SYSTEM
REPOSITORY CONTRACT
==========================================================

REPOSITORY
Workspace Repository

PHASE
V — Repository Implementations

STATUS
FOUNDATION CONTRACT

PURPOSE

The Workspace Repository is the single
authoritative persistence layer for
Workspaces within Evolution Hub.

It persists Workspace entities that
serve as the Digital Headquarters for
execution.

A Workspace provides the execution
environment where Members, Teams,
Projects, Opportunities, and AI operate.

The repository performs persistence only
and shall never execute work, manage
resources, govern Organizations,
or enforce constitutional policy.

CONSTITUTIONAL PRINCIPLES

• One repository for one aggregate.
• One responsibility only.
• Persistence only.
• Workspaces provide execution.
• Organizations provide stewardship.
• Members perform work.
• No business logic.
• No constitutional authority.
• No governance decisions.
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

export interface WorkspaceRepository {
  findById(id: string): Promise<unknown | null>;

  findBySlug(slug: string): Promise<unknown | null>;

  findByTeamId(teamId: string): Promise<unknown[]>;

  findActiveByTeamId(teamId: string): Promise<unknown[]>;

  findArchivedByTeamId(teamId: string): Promise<unknown[]>;

  create(data: unknown): Promise<unknown>;

  update(id: string, data: unknown): Promise<unknown>;

  archive(id: string): Promise<void>;

  restore(id: string): Promise<void>;

  exists(id: string): Promise<boolean>;
}
